import { lazy } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../home/Home";
// import Products from "../products/Products";
// import ProductDetails from "../product-details/ProductDetails";
import Counter from "../usereducer-hook/Counter";
import A from "../redux-comps/A";
import B from "../redux-comps/B";
import Cart from "../cart/Cart";
import City from "../redux-comps/City";
import ProfileContainer from "../profile/ProfileContainer";
import Profile from "../profile/Profile";
import Address from "../profile/Address";
import Order from "../orders/Orders";
import ChangePassword from "../change-password/ChangePassword";
import ContactUs from "../contactus/ContactUs";
// import Whislist from "../wishlist/Whislist";
const Whislist = lazy(() => import("../wishlist/Whislist"));
const Products = lazy(() => import("../products/Products"));
const ProductDetails = lazy(() => import("../product-details/ProductDetails"));

function RoutesC() {
  return (
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
  );
}

export default RoutesC;
