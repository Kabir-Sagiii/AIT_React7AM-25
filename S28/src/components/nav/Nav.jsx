import "./Nav.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Nav() {
  // const info = useSelector((storedata) => {
  //   return storedata;
  // });
  return (
    <div className="navContainer">
      <div className="leftPanel">
        <h1>Brand Name</h1>
      </div>
      <div className="rightPanel">
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/profile">Profile</Link>

        <Link to="/contactus">ContactUs</Link>
        <Link to="/cart">Cart</Link>
        {/* <p style={{ color: "white" }}>{info}</p> */}
        <button
          style={{
            border: "2px solid red",
            color: "red",
            padding: "7px 30px",
          }}
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default Nav;
