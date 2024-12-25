import React from "react";
import { useSelector } from "react-redux";
function B() {
  let { user, city } = useSelector((storedata) => {
    return storedata;
  });

  return (
    <div style={{ padding: "50px" }}>
      <h2>User Details</h2>
      <br />
      <h5>NAME: {user}</h5>
      <br />
      <hr />
      <br />
      <h5>CITY:{city}</h5>
    </div>
  );
}

export default B;
