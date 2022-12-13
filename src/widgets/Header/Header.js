import './Header.css'
import {useEffect, useState} from "react";
import {logDOM} from "@testing-library/react";
//import getCurrencyPrice from "../../services/currencyService";

function Header({defaultCurrencies, getCurrencyPrice}) {
    const [course, setCourse] = useState({});
    const {rates} = course;

    useEffect(()=>{
        getCurrencyPrice('UAH', defaultCurrencies)
            .then(res=>setCourse(res));
    }, []);

    const ExchangeRate = () => {
        const RateItem = ({name, index}) => {
            if (name !== 'UAH') {
                const price = rates ? rates[name] :'loading'
                return <p key={index} className='course-input border-space'>{price} {name}</p>
            }
        }

        return(
                <div className="header-live-course">
                    {defaultCurrencies.map((name, index) => (
                        <RateItem name={name} index={index}/>
                    ))}
                </div>
            )
    }

    return(
        <div className="header out-Light">
            <div className='vertical-text'>
                <p className="header-text">Exchange rate to the hryvnia</p>
            </div>
            <ExchangeRate/>
        </div>
    );
}

export default Header;