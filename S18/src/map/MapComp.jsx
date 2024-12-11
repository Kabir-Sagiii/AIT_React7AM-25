import React from "react";

function MapComp() {
  var myData = ["HTML", "CSS", "JS", "REACT"];
  //   var jsxelements = [<li>HTML</li>, <li>CSS</li>, <li>JS</li>];

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h2>Undertsnading Map in React</h2>
      <ul type="none">
        {myData.map((ele, index) => {
          return <li>{ele}</li>; //[<li>HTML</li>,<li></li>  ]
        })}
      </ul>
    </div>
  );
}

export default MapComp;
