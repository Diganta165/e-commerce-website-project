// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<App />);

// reportWebVitals();

import { createRoot  } from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import App from "./App";
import "./index.css";
import Wishlist from "./components/Wishlist/Wishlist";
import Cart from "./components/Cart/Cart";
import Blog from "./components/Blog/Blog";
import ItemInfo from "./components/ItemInfo/ItemInfo"
import Home from "./components/Home/Home/Home";
import Account from  "./components/Account/Account";

const container  = document.getElementById("root");
const root = createRoot(container);
root.render (
  <BrowserRouter>
    <Routes>
      {/* <Route path="/" element={<App />} /> */}
      <Route path="/" element={<Home />} />
      <Route path = "/wishlist" element = {<Wishlist />} />
      <Route path="/cart" element = {<Cart />}/>
      <Route path="/blog" element = {<Blog />}/>
      <Route path="/account" element = {<Account />}/>
      <Route path="/intemInfo/:itemId" element = {<ItemInfo />}/>
    </Routes>
  </BrowserRouter>,
);