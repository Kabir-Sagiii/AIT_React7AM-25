import "./App.css";
import React from "react";
import Nav from "./components/nav/Nav";
// import Products from "./components/products/Products";
import Home from "./components/home/Home";
import Profile from "./components/profile/Profile";
import ContactUs from "./components/contactus/ContactUs";
import { Navigate, Route, Routes } from "react-router-dom";
import ProfileContainer from "./components/profile/ProfileContainer";
import ProductDetails from "./components/product-details/ProductDetails";
import Address from "./components/profile/Address";
import Order from "./components/orders/Orders";
import ChangePassword from "./components/change-password/ChangePassword";
import Wishlist from "./components/wishlist/Whislist";
import Whislist from "./components/wishlist/Whislist";
import UseRef from "./components/useref/UseRef";
import DataRef from "./components/useref/DataRef";
import Counter from "./components/usereducer-hook/Counter";
// import Cart from "./components/cart/Cart";
import A from "./components/redux-comps/A";
import B from "./components/redux-comps/B";
import Lazy from "./components/lazy-loading/Lazy";
const Cart = React.lazy(() => import("./components/cart/Cart"));
const Products = React.lazy(() => import("./components/products/Products"));

function App() {
  return (
    <div>
      <Nav />

      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route
          path={"/products"}
          element={
            <React.Suspense fallback={<h3>loading...</h3>}>
              <Products />
            </React.Suspense>
          }
        />
        <Route
          path={"/usereducer"}
          element={
            <div>
              <Counter />
            </div>
          }
        />
        <Route path={"/profile"} element={<ProfileContainer />}>
          <Route path="" element={<Navigate to="details" />} />
          <Route
            path="redux"
            element={
              <div>
                <A />
                <B />
              </div>
            }
          />
          <Route path="details" element={<Profile />} />
          <Route path={"address"} element={<Address />} />
          <Route path={"orders"} element={<Order />} />
          <Route path={"wishlist"} element={<Whislist />} />
          <Route path={"changepassword"} element={<ChangePassword />} />
        </Route>
        <Route path={"/productdetails/:id"} element={<ProductDetails />} />
        <Route path={"/contactus"} element={<ContactUs />} />
        <Route
          path={"/cart"}
          element={
            <React.Suspense fallback={<div>Loading...</div>}>
              <Cart />
            </React.Suspense>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
