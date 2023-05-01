import './App.css';
import { Routes, Route } from 'react-router-dom';

import React from 'react';
import Footer from './containers/Footer/Footer';
import Header from './containers/Header/Header';
import Home from './containers/Home/Home';
import routes from './shared/appRoutes';
import NotImplement from './containers/NotImplement/NotImplement';
import Tshirts from './containers/Tshirts/Tshirts'
import Detail from './containers/Detail/Detail'
import Cart from './containers/Cart/Cart'
export const cartList =[];
// export const cartList =[{price: '$19.99', name: 'Beep Boop', quantity: 13, selectedSize: "Women's S", shirtColor: 'blue', shirtNumber: "0"}];
const App = () => {
  return (
    <div className="App">
      <Header />
      <div className='MainContent'>
      <Routes>
        <Route exact path={routes.home} element={<Home/>}></Route>
        <Route exact path={routes.notImplemented} element={<NotImplement/>}></Route>
        <Route exact path={routes.products} element={<Tshirts/>}></Route>
        <Route exact path={routes.shoppingCart} element={<Cart/>}></Route>
        <Route exact path={routes.detail} element={<Detail/>}></Route>
      </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default App;
