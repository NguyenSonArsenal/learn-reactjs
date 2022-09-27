import './App.css';
import "antd/dist/antd.css";
import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";

import Layout from "./components/layout/Layout";
import Home from "./components/Home";
import About from "./components/About";
import Checkout from "./components/Checkout";
import Contact from "./components/Contact";
import Login from "./components/Login";
import NoPage from "./components/NoPage";
import Pricing from "./components/Pricing";
import Product from "./components/Product";
import ProductType from "./components/ProductType";
import Profile from "./components/Profile";
import Register from "./components/Register";

class App extends React.Component {
	render() {
		return <div>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Layout/>}>
              <Route index element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="checkout" element={<Checkout />} />
              <Route path="contact" element={<Contact />} />
              <Route path="login" element={<Login />} />
              <Route path="404" element={<NoPage />} />
              <Route path="pricing" element={<Pricing />} />
              <Route path="product" element={<Product />} />
              <Route path="product_type" element={<ProductType />} />
              <Route path="profile" element={<Profile />} />
              <Route path="register" element={<Register />} />
          </Route>
				</Routes>
			</BrowserRouter>
		</div>
	}
}

export default App;