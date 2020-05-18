import { getCustomRepository } from 'typeorm';

import TransactionsRepository from '../repositories/TransactionsRepository';
import AppError from '../errors/AppError';

class DeleteTransactionService {
  public async execute(id: string): Promise<void> {
    const transactionsRepository = getCustomRepository(TransactionsRepository);

    const deathRowTransaction = await transactionsRepository.findOne(id);
    if (!deathRowTransaction) {
      throw new AppError('There is no transaction with this ID', 400);
    }

    await transactionsRepository.remove(deathRowTransaction);
  }
}

export default DeleteTransactionService;
