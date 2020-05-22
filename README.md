[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=flat-square&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/guerrero-roberto/
[![LinkedIn][linkedin-shield]][linkedin-url]
<p align="center">
    <img alt="GoStack" title="#GoStack" src="./github/GoStack.svg" width="250px" />

  <h3 align="center">Project developed during 🚀<b>GoStack Bootcamp</b></h3>
</p>

## 📚 About

<img alt="GoMarketplace" title="#GoMarketplace" src="./github/GoFinances-preview.gif" width="100%" />

The main goal of this project was to deal with the addition and removal of items to the cart, as well as storing information with [Async Storage](https://github.com/react-native-community/async-storage). A fake api built with [JSON Server](https://github.com/typicode/json-server) was utilized to request the data for the produtcs to be shown.

### User can:
- Add products to the cart
- See how many items are in the cart
- See the total cost of all the products in the cart
- Navigate to the cart
- Add & Remove items in the cart

More products can be added just by modifying ``server.json`` file.

## 🎈 Getting Started

You need an Android or IOS emulator configured to run the application. In the example above, [Android Studio Emulator](https://developer.android.com/studio/?gclid=CjwKCAjw5Ij2BRBdEiwA0Frc9VE3X071s04qoOVMCf79a4DnB5or3Lq3Df1cIKLHxFYnuBC9C7SVBxoCnKoQAvD_BwE&gclsrc=aw.ds) was used to emulate Pixel 3 XL.

### Using a fake API

In ``package.json`` there's the dependency ``json-server`` and a ``server.json`` file which has the products' data to the route ``/products``. To execute the server the following command is required:
```js
yarn json-server server.json -p 3333
```


### Installation

1. Clone the repo
```sh
git clone https://github.com/Betorresmo/GoMarketplace.git
```
2. Install yarn packages
```sh
yarn install
```
3. Run Metro Bundler
```sh
yarn start
```
4. Build the application
```sh
yarn android
```
or
```sh
yarn ios
```

## 💻 Technologies

- [React Native](https://reactnative.dev/) 
- [TypeScript](https://github.com/microsoft/TypeScript)
- [Axios](https://github.com/axios/axios) 
- [Async Storage](https://github.com/react-native-community/async-storage)
- [JSON Server](https://github.com/typicode/json-server)

## 📬 [Contact me](https://www.linkedin.com/in/guerrero-roberto/)
