import './App.css';

import {useEffect, useState} from "react";
import Header from "./widgets/Header/Header";
import DoubleCurrencySelect from "./widgets/DoubleCurrencySelect/DoubleCurrencySelect";

import getCurrencyPrice from "./services/currencyService";

const currencies = [ "UAH", "USD", "EUR"];

function App() {

    const [ratesCur, setRatesCur] = useState({});

    useEffect(()=>{
        getCurrencyPrice('UAH', currencies)
            .then(res=>setRatesCur(res));
    },[])


  return (
      <>
          <Header
              ratesCur = {ratesCur}
              defaultCurrencies = {currencies}
          />
          <DoubleCurrencySelect
              ratesCur = {ratesCur}
              defaultCurrencies = {currencies}
          />
      </>
  );
}

export default App;
