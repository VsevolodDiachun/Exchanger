import './BlocksCurrensy.css'
import {useState} from "react";

const BlocksCurrensy = ({defaultCurrencies, onChange}) => {

    const [amount, setAmount] = useState();

    function onSetMount(e) {
        setAmount(e.target.value())
    }

    const handlerNameChange = (e) => {
        onChange(e.target.value)
    }


    return (
        <div className="container out-Light">
            <ul className="area-actual-course">
                {Object.keys(defaultCurrencies).map((name) => (
                    <li className='actual-course'>
                        <p className='course-input'>{defaultCurrencies[name]} {name}</p>
                        <input className='input-cur'
                               placeholder={0}
                               type="text"
                               value={amount}
                               onChange={handlerNameChange}
                        />
                    </li>))}
            </ul>
        </div>
    );
}


export default BlocksCurrensy;