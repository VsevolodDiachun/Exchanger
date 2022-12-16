import './Header.css'

function Header({defaultCurrencies, ratesCur}) {

    const ExchangeRate = () => {
        const RateItem = ({name, index}) => {
            if (name !== 'UAH') {
                const price = ratesCur.rates ? ratesCur.rates[name] :'loading'
                return <p key={index} className='course-input border-space'>{Math.floor(1 / price * 100) / 100} {name}</p>
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