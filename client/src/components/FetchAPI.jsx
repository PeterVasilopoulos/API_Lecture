import React, { useState } from 'react'

const FetchAPI = () => {
    // Holds the fetched data
    const [coins, setCoins] = useState([]);

    // Function to fetch the data from the api
    const fetchData = () => {
        fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en")
        .then((response) => {
            // Change data into json
            return response.json();
        })
        .then((response) => {
            // Console log data to make sure it's correct
            console.log(response);
            // Place data into variable
            setCoins(response);
        })
        .catch((err) => {
            // Log our error if we get one
            console.log("This is our catch all fetch error:", err);
        })
    }

    return (
        <div>
            <button onClick={fetchData} className='btn btn-outline-primary'>Fetch Data</button>

            {/* Map through all the data and display necessary info */}
            {
                coins.map((coin, i) => {
                    return (
                        <div key={i}>
                            <img src={coin.image} alt="Coin Gecko" height="150px"/>
                            <h3>{coin.id}</h3>
                            <h2>{coin.name}</h2>
                            <h2>{coin.current_price}</h2>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default FetchAPI