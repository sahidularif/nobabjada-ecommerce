import React from "react";
import "./App.css";
import "./styles/style.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/pages/home";
import Login from "./components/pages/login";
import Admin from "./components/pages/admin";
import Products from "./components/admin/products";
import Article from "./components/admin/article";
import Product from "./components/admin/product";
import Modal from "./components/modal/Modal";
import Details from "./components/pages/details";
import SingleProduct from "./components/BestProduct/";
import PrivateOutlet from "./firebase/PrivateOutlet";
import { useDispatch } from "react-redux";
import Register from "./components/pages/register";
import Forgetpassword from "./components/pages/forgetPassword";

function App() {
  const [openModal, setOpenModal] = React.useState(false);
  const dispatch = useDispatch();
  // console.log(user)
  React.useEffect(() => {
    try {
      const value = window.localStorage.getItem("user");

      if (value) {
        let user = JSON.parse(value);
        const { email, displayName } = user;
        // dispatch(loging({email, displayName}))
      }
    } catch (err) {
      console.log(err);
    }
  });
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgetPassword" element={<Forgetpassword />} />
          <Route path="/product/:id" element={<Details />} />
          <Route path="/single-product/:id" element={<SingleProduct />} />
          <Route path="admin" element={<Admin chield={<Login />} />} />
          <Route path="products" element={<Admin chield={<Products />} />} />
          <Route path="product" element={<Admin chield={<Product />} />} />
          <Route path="articles" element={<Admin chield={<Article />} />} />
          <Route path="/dashboard" element={<PrivateOutlet />}>
            <Route path="admin" element={<Details />} />
            <Route path="products" element={<Admin chield={<Products />} />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
