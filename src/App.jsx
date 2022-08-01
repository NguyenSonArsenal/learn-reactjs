import './App.css';
import "antd/dist/antd.css";
import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Login from "./page/Login";
import Register from "./page/Register";
import Home from "./page/Home";
import NotFound404 from "./page/NotFound404";
import Contact from "./page/Contact";
import About from "./page/About";
import Checkout from "./page/Checkout";
import Cart from "./page/Cart";
import Product from "./page/Product";
import ProductType from "./page/ProductType";
import Pricing from "./page/Pricing";
import Profile from "./page/Profile";

class App extends React.Component {
    render() {
        return <>
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Home />}/>
                <Route exact path="/login" element={<Login />}/>
                <Route exact path="/register" element={<Register />}/>
                <Route exact path="/404" element={<NotFound404 />}/>
                <Route exact path="/contact" element={<Contact />}/>
                <Route exact path="/about" element={<About />}/>
                <Route exact path="/checkout" element={<Checkout />}/>
                <Route exact path="/cart" element={<Cart />}/>
                <Route exact path="/product" element={<Product />}/>
                <Route exact path="/product_type" element={<ProductType />}/>
                <Route exact path="/pricing" element={<Pricing />}/>
                <Route exact path="/profile" element={<Profile />}/>
            </Routes>
        </BrowserRouter>
        </>
    }
}

export default App;
