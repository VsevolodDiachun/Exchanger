async function getCurrencyPrice(base, symbols){
    const myHeaders = new Headers();
    myHeaders.append("apikey", "jNgCBRjkTJF6fADLYdeBmWy7FyM4FXD2-");

    const requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    //return await fetch(`https://api.apilayer.com/fixer/latest?base=${base}&symbols=${symbols.join(',')}`, requestOptions)




    //====================MOCK=====================
    const mockedJson = {
        "success": true,
        "timestamp": 1670271663,
        "base": "UAH",
        "date": "2022-12-05",
        "rates": {
            "UAH": 1.00,
            "USD": 39.57,
            "EUR": 40.21
        }
    }

    return await new Promise((res, rej)=>{
        setTimeout(() => res(mockedJson),500)
    })
    //===================MOCK=======================
}


export default getCurrencyPrice;