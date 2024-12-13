import "./App.css";

import Nav from "./components/nav/Nav";
import Products from "./components/products/Products";
import Home from "./components/home/Home";
import Profile from "./components/profile/Profile";
import ContactUs from "./components/contactus/ContactUs";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/products"} element={<Products />} />
        <Route path={"/profile"} element={<Profile />} />
        <Route path={"/contactus"} element={<ContactUs />} />
      </Routes>
    </div>
  );
}

export default App;
