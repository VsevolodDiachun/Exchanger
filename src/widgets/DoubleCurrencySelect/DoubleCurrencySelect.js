import './DoubleCurrencySelect.css';
import {useEffect, useState} from "react";

const SetCurrency = ({ value, currency, onChangeValue, onChangeCurrency, defaultCurrencies }) => {
    return (
        <div className='double-block-inside inside-color'>
            <input
                className='input-exchanger'
                placeholder='0'
                onChange={(e) => onChangeValue(e.target.value)}
                type={'number'}
                value={Math.floor(value * 100) / 100}
            />
            <Select
                currency={currency}
                onChangeCurrency={onChangeCurrency}
                defaultCurrencies={defaultCurrencies}
            />
        </div>
    )
}

const Select = ({ onChangeCurrency, currency, defaultCurrencies }) => {
    return (
        <select className='selector' value={currency} onChange={onChangeCurrency}>
            {defaultCurrencies.map((cur) => (
                <option key={cur}>{cur}</option>
            ))}
        </select >
    )
}

const DoubleCurrencySelect = ({defaultCurrencies, ratesCur}) => {

    const [fromCurrency, setFromCurrency] = useState('UAH')
    const [toCurrency, setToCurrency] = useState('USD')
    const [fromPrice, setFromPrice] = useState();
    const [toPrice, setToPrice] = useState();


    useEffect(() => {
        if (ratesCur.rates) {
            onChangeFromPrice(fromPrice)
            onChangeToPrice(toPrice)
        }
    }, [fromCurrency, toCurrency])

    const onChangeFromPrice = (value) => {
        const price = value / ratesCur.rates[fromCurrency];
        const result = price * ratesCur.rates[toCurrency];
        setToPrice(result);
        setFromPrice(value);
    }

    const onChangeToPrice = (value) => {
        const price = value / ratesCur.rates[toCurrency];
        const result = price * ratesCur.rates[fromCurrency];
        setFromPrice(result);
        setToPrice(value);
    }

    return(
        <div className="blocks-double out-Light outside-color">
            <SetCurrency
                value={fromPrice}
                currency={fromCurrency}
                onChangeCurrency={(e) => setFromCurrency(e.target.value)}
                onChangeValue={onChangeFromPrice}
                defaultCurrencies={defaultCurrencies}
            />
            <p className='is-equal-to'>=</p>
            <SetCurrency
                value={toPrice}
                currency={toCurrency}
                onChangeCurrency={(e) => setToCurrency(e.target.value)}
                onChangeValue={onChangeToPrice}
                defaultCurrencies={defaultCurrencies}
            />
        </div>
    )
}

export default DoubleCurrencySelect;