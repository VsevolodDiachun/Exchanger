async function getCurrencyPrice(base, symbols) {
    const myHeaders = new Headers();
    myHeaders.append("apikey", "ucxLP6WqAR2tGN23lwC9lXHhXkIcqFDi");

    const requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    return fetch(`https://api.apilayer.com/fixer/latest?base=${base}&symbols=${symbols.join(',')}`, requestOptions)
        .then((response) => response.json())

    /* //====================MOCK=====================
    const mockedJson = {
        "success": true,
        "timestamp": 1671221463,
        "base": "UAH",
        "date": "2022-12-10",
        "rates": {
            "UAH": 1,
            "USD": 0.027199,
            "EUR": 0.025656,
            "PLN": 0.119373
        }
    }

    return await new Promise((res, rej)=>{
        setTimeout(() => res(mockedJson),500)
    })
    //===================MOCK======================= */
}


export default getCurrencyPrice;