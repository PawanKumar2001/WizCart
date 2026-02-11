import React, { useState } from 'react';
import './App.css';
import Na from './components/Na';
import Homep from './components/pages/Home';
import Product from './components/pages/Product';
import BuyNow from './components/pages/BuyNow';
import Catagories from './components/pages/Catagories';
import About from './components/pages/About';
import Footer from './components/Footer';
import productsData from './Backend/database/data.json';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Sell from './components/pages/Sell';
import Helpline from './components/pages/Helpline';
import Cart from './components/pages/Cart';
import Account from './components/pages/Account';
import LoadingAnimation from './components/pages/orderplaced';

function App() {
  const [mode, setmode] = useState("light");

  const togglemode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "black";
    }
    else {
      setmode("light");
      document.body.style.backgroundColor = "white";
    }
  }
  return (
    <>
      <Router>
        <Na title="WizCart" mode={mode} togglemode={togglemode} />
        <Routes>
          <Route exact path="/categories" element={<Catagories mode={mode} togglemode={togglemode} />} />
          <Route exact path="/about" element={<About mode={mode} togglemode={togglemode} />} />
          <Route exact path="/account" element={<Account mode={mode} togglemode={togglemode} />} />
          <Route exact path="/sell" element={<Sell mode={mode} togglemode={togglemode} />} />
          <Route exact path="/helpline" element={<Helpline mode={mode} togglemode={togglemode} />} />
          <Route exact path="/cart" element={<Cart mode={mode} togglemode={togglemode} />} />
          <Route exact path="/orderplaced" element={<LoadingAnimation mode={mode} togglemode={togglemode} />} />
          {Object.keys(productsData).map((productKey) => {
            const product = productsData[productKey];
            return (
              <Route
                exact
                path={`/${productKey}`}
                element={<Product mode={mode} togglemode={togglemode} {...product} />}
                key={productKey}
              />
            );
          })}
          <Route path="/buy/:nameProduct/:descProduct/:priceProduct/:src" element={<BuyNow mode={mode} togglemode={togglemode} />} />
          <Route exact path="/" element={<Homep mode={mode} togglemode={togglemode} />} />
        </Routes>
        <Footer mode={mode} togglemode={togglemode} />
      </Router>
    </>
  );
}

export default App;