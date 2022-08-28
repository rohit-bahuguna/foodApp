import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProductList from "./components/ProductList";
import ProductDetail from "./components/ProductDetail";
import Cart from "./components/Cart";
import Wishlist from "./components/Wishlist";
import Orders from "./components/Orders";
import "./css/style.css";
import "./css/responsive.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./css/App.css"
import Login from "./components/Login";
import Admin_Add_Product from "./components/Admin_Add_Product";
import Admin_Product_List from "./components/Admin_Product_List";
import Signup from "./components/Signup";
import Home from "./components/Home";
import Admin_Update_Product from "./components/Admin_update_product";
function App() {
  return (
    <div >
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/productlist" element={<ProductList />} />
          <Route path="/productdetail/:id" element={<ProductDetail />} />

          <Route path="/cart" element={<Cart />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/orders" element={<Orders />} />

          <Route path="/admin_add_product" element={<Admin_Add_Product />} />
          <Route path="/admin_product_list" element={<Admin_Product_List />} />
          <Route path="/admin_update_product/:id" element={<Admin_Update_Product />} />

          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;


