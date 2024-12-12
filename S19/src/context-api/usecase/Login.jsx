import { useContext } from "react";
import authContext from "./authContext";

function Login() {
  const { login } = useContext(authContext);
  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h2>Login Component</h2>
      <br />
      <button
        style={{ padding: "7px 30px" }}
        onClick={() => {
          login();
        }}
      >
        Login
      </button>
    </div>
  );
}

export default Login;
