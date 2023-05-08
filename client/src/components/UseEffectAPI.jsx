import React, {useState, useEffect} from 'react'
import axios from 'axios'

const UseEffectAPI = () => {
    // Variable to hold coins
    const [coins, setCoins] = useState([]);

    // Variable to check if the button has been clicked
    let [buttonClicked, setButtonClicked] = useState(false);

    // UseEffect to get data from api
    useEffect(() => {
        axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en")
        .then((response) => {
            // Log data to check formatting
            console.log(response.data);
            // Put data into coins variable
            setCoins(response.data);
        })
        .catch((err) => {
            // Log error if we get one
            console.log("Error: ", err);
        })
    }, [buttonClicked]);

    return (
        <div>
            <h1>UseEffect API</h1>

            <button className='btn btn-outline-warning' onClick={() => {setButtonClicked(!buttonClicked)}}>Re-run API Call</button>

            {/* Map through data and display necessary info */}
            {
                coins.map((coin, i) => {
                    return (
                        <div key={i}>
                            <h1>{coin.name}</h1>
                            <img src={coin.image} alt="Coin Gecko" height="150px"/>
                            <h4>${coin.current_price}</h4>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default UseEffectAPI