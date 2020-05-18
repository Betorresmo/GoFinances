import fs from 'fs';
import path from 'path';
import csvParse from 'csv-parse';
import { getRepository } from 'typeorm';

import uploadConfig from '../config/upload';
import Transaction from '../models/Transaction';
import Category from '../models/Category';

interface CSVTransaction {
  title: string;
  type: 'income' | 'outcome';
  value: number;
  category: string;
}

class ImportTransactionsService {
  async execute(fileName: string): Promise<Transaction[]> {
    const csvFilePath = path.resolve(uploadConfig.directory, fileName);
    const transactionsRepository = getRepository(Transaction);
    const categoriesRepository = getRepository(Category);

    const readCSVStream = fs.createReadStream(csvFilePath);
    const parseStream = csvParse({
      from_line: 2,
      ltrim: true,
      rtrim: true,
    });
    const parseCSV = readCSVStream.pipe(parseStream);

    const csvTransactions: CSVTransaction[] = [];
    const categoryTitles: string[] = [];

    parseCSV.on('data', csvData => {
      const [title, type, value, category] = csvData;

      if (!categoryTitles.includes(category)) {
        categoryTitles.push(category);
      }

      const csvTransaction: CSVTransaction = { title, type, value, category };
      csvTransactions.push(csvTransaction);
    });

    await new Promise(resolve => {
      parseCSV.on('end', resolve);
    });

    const categories = await Promise.all(
      categoryTitles.map(async categoryTitle => {
        let category = await categoriesRepository.findOne({
          where: { title: categoryTitle },
        });

        if (!category) {
          category = categoriesRepository.create({
            title: categoryTitle,
          });

          await categoriesRepository.save(category);
        }

        return category;
      }),
    );

    const transactions = csvTransactions.map(csvTransaction => {
      const { title, type, value, category: categoryTitle } = csvTransaction;

      const categoryID =
        categories[
          categories.findIndex(
            categoryItem => categoryItem.title === categoryTitle,
          )
        ].id;

      const transaction = transactionsRepository.create({
        title,
        type,
        value,
        category_id: categoryID,
      });

      return transaction;
    });

    await transactionsRepository.save(transactions);

    return transactions;
  }
}
export default ImportTransactionsService;
