import "./Nav.css";

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
        <a href="/">Home</a>
        <a href="/products">Products</a>
        <a href="/profile">Profile</a>

        <a href="/contactus">ContactUs</a>
        <a href="/cart">Cart</a>
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
