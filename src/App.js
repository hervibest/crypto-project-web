import React, {useEffect,useState} from "react";
import { Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import {ThemeProvider} from './context/ThemeContext'
import axios from 'axios';
import Home from './routes/Home';
import Signin from './routes/Signin';
import Signup from './routes/Signup';
import Account from './routes/Account';
import CoinPage from "./routes/CoinPage";
import { Route } from 'react-router-dom'
import Footer from "./components/Footer";

function App() {

  const [coins, setCoins] = useState([]);

  const url =
    'https://api.coingecko.com/api/v3/coins/markets?vs_currency=idr&order=market_cap_desc&per_page=20&page=1&sparkline=true';

  useEffect(() => {
    axios.get(url).then((response) => {
      setCoins(response.data);
      console.log(response.data)
      // console.log(response.data)
    });
  }, [url]);

  return (
  <ThemeProvider>
    <Navbar />
        <Routes>
        <Route path='/' element={<Home coins={coins} />} />
          <Route path='/signin' element={<Signin/>} />
          <Route path='/signup' element={<Signup/>} />
          <Route path='/account' element={<Account/>} />
          <Route path='/coin/:coinId' element={<CoinPage/>}>
            <Route path=':coinId' />
          </Route>
        </Routes>
        <Footer/>


  </ThemeProvider>)
}

export default App;
