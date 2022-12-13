import './DoubleCurrencySelect.css';
import {useEffect, useState} from "react";

const DoubleCurrencySelect = ({defaultCurrencies, getCurrencyPrice}) => {

    const [ratesCur, setRatesCur] = useState({});
    const {rates} = ratesCur;
    const [fromCurrency, setFromCurrency] = useState('UAH')
    const [toCurrency, setToCurrency] = useState('USD')
    const [fromPrice, setFromPrice] = useState();
    const [toPrice, setToPrice] = useState();

    useEffect(()=>{
        getCurrencyPrice('USD', defaultCurrencies)
            .then(res=>setRatesCur(res));
    },[])

    const Select = ({ onChangeCurrency }) => {
        return (
            <select className='selector'>
                {defaultCurrencies.map((cur) => (
                    <option key={cur} onClick={onChangeCurrency(cur)}>{cur}</option>
                ))}
            </select>
            )
    }

    const SetCurrency = ({ value, currency, onChangeValue, onChangeCurrency }) => {

        return (
            <div className='double-block-inside inside-color'>
                <input
                    className='input-exchanger'
                    placeholder='0'
                    onChange={(e) => onChangeValue(e.target.value)}
                    type={'number'}
                    value={value}
                />
                <Select onChangeCurrency={onChangeCurrency}/>
            </div>
        )
    }

    const onChangeFromPrice = (value) => {
        const price = value / rates[fromCurrency];
        const result = price * rates[toCurrency];
        setToPrice(result);
        setFromPrice(value)
    }

    const onChangeToPrice = (value) => {
        const price = value / rates[toCurrency];
        const result = price * rates[fromCurrency];
        setFromPrice(result);
        setToPrice(value)
    }

    return(
        <div className="blocks-double out-Light outside-color">
            <SetCurrency
                value={fromPrice}
                currency={fromCurrency}
                onChangeCurrency={setFromCurrency}
                onChangeValue={onChangeFromPrice}
            />
            <p className='is-equal-to'>=</p>
            <SetCurrency
                value={toPrice}
                currency={toCurrency}
                onChangeCurrency={setToCurrency}
                onChangeValue={onChangeToPrice}
            />
        </div>
    )
}

export default DoubleCurrencySelect;