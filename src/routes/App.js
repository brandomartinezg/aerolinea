import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Airport from '../components/Airport';
import Header from '../components/header/Header';
import PurchaseFormat from '../components/purchaseFormat/PurchaseFormat';
import ShoppingCart from '../components/shoppingCart/ShoppingCart';

const App = () => (
    <BrowserRouter>
        <Header/>
        <Routes>
            <Route exact path="/" element={<Airport/>}/>
            <Route exact path="ShoppingCart" element={<ShoppingCart/>}/>
            <Route exact path="PurchaseFormat" element={<PurchaseFormat/>}/>
        </Routes>
    </BrowserRouter>
);
export default App;