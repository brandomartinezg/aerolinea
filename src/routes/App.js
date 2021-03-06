import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Airport from '../components/Airport';
import Header from '../components/header/Header';
import NotFound from '../components/NotFound';
import PurchaseFormat from '../components/purchaseFormat/PurchaseFormat';
import ShoppingCart from '../components/shoppingCart/ShoppingCart';

const App = () => (
    <BrowserRouter>
        <Header/>
        <Routes>
            <Route path='*' element={<NotFound/>}/>
            <Route exact path="/aerolinea" element={<Airport/>}/>
            <Route exact path="ShoppingCart" element={<ShoppingCart/>}/>
            <Route exact path="PurchaseFormat" element={<PurchaseFormat/>}/>
        </Routes>
    </BrowserRouter>
);
export default App;