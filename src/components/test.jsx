import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Trending = () => {
  const [trending, setTrending] = useState([]);

  const url = 'https://api.coingecko.com/api/v3/search/trending';

  useEffect(() => {
    axios.get(url).then((response) => {
      setTrending(response.data.coins);
      //   console.log(response.data.coins)
    });
  }, []);

  return (
    <div className='rounded-div  py-8 text-primary'>
      <h1 className='text-2xl font-bold py-4'>Trending Coins</h1>
    </div>
  );
};

export default Trending;
