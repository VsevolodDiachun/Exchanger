import './App.css';

import BlocksCurrensy from './widgets/BlocksCurrensy/BlocksCurrensy';
import {useEffect, useState} from "react";
import axios from 'axios';
import Header from "./widgets/Header/Header";
import DoubleCurrencySelect from "./widgets/DoubleCurrencySelect/DoubleCurrencySelect";

import getCurrencyPrice from "./services/currencyService";

const currencies = [ "UAH", "USD", "EUR"];

/*{
    "success": true,
    "timestamp": 1670271663,
    "base": "USD",
    "date": "2022-12-05",
    "rates": {
        "EUR": 0.953401,
        "GBP": 0.82136
    }
}
*/



//getCurrencyPrice('UAH', ['USD', 'EUR'])

function App() {




  return (
      <>
          <Header
              defaultCurrencies = {currencies}
              getCurrencyPrice = {getCurrencyPrice}
          />
          <DoubleCurrencySelect
              defaultCurrencies = {currencies}
              getCurrencyPrice = {getCurrencyPrice}
          />
          <BlocksCurrensy
          defaultCurrencies = {currencies}
          />
      </>
  );
}

export default App;
