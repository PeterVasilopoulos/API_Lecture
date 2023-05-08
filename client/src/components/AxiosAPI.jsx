import React, { useState } from 'react'
import axios from 'axios'

const AxiosAPI = () => {
    // Variable to hold coins data
    const [coins, setCoins] = useState([]);

    // Function to fetch data with Axios
    const fetchData = () => {
        axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en")
        .then((response) => {
            // Log data to check how it's formatted
            console.log(response.data);
            // Put data inside the reponse into the coins variable
            setCoins(response.data);
        })
        .catch((err) => {
            console.log("This is our catch all error message:", err);
        })
    }

    return (
        <div>
            <h1>Axios API</h1>
            <button onClick={fetchData} className='btn btn-outline-secondary'>Fetch Data</button>

            {/* Map through data and display necessary info */}
            {
                coins.map((coin, i) => {
                    return (
                        <div key={i}>
                            <img src={coin.image} alt="Coin Gecko" height="150px"/>
                            <h1>{coin.name}</h1>
                            <h4>{coin.current_price}</h4>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default AxiosAPI