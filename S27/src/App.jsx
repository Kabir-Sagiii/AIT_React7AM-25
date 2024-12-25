import "./App.css";

import Nav from "./components/nav/Nav";
import Products from "./components/products/Products";
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
import Cart from "./components/cart/Cart";
import A from "./components/redux-comps/A";
import B from "./components/redux-comps/B";
import City from "./components/redux-comps/City";
function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/products"} element={<Products />} />
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
                <City />
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
        <Route path={"/cart"} element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
