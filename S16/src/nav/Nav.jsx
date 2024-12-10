import "./Nav.css";
import { useContext } from "react";
import authContext from "../context-api/usecase/authContext";
function Nav({ state }) {
  let { logout } = useContext(authContext);
  return (
    <div className="navContainer">
      <div className="leftPanel">
        <h1>Brand Name</h1>
      </div>
      <div className="rightPanel">
        <a href="">Home</a>
        <a href="">Products</a>
        <a href="">Profile</a>
        <a href="">ContactUs</a>
        {state ? (
          <button
            style={{
              border: "2px solid red",
              color: "red",
              padding: "7px 30px",
            }}
            onClick={() => {
              logout();
            }}
          >
            Logout
          </button>
        ) : null}
      </div>
    </div>
  );
}

export default Nav;
