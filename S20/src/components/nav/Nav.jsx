import "./Nav.css";

function Nav() {
  return (
    <div className="navContainer">
      <div className="leftPanel">
        <h1>Brand Name</h1>
      </div>
      <div className="rightPanel">
        <a href="/">Home</a>
        <a href="/products">Products</a>
        <a href="/profile">Profile</a>
        <a href="/contactus">ContactUs</a>

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
