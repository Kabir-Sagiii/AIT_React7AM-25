import React from "react";
import "./Home.css";

function Home() {
  return (
    // <div className="home">
    //   <p className="text-primary bg-info h1">
    //     Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis,
    //     sapiente?
    //   </p>
    //   <p className="text-secondary bg-success h6">
    //     Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, quaerat!
    //   </p>
    //   <p className="text-dark bg-danger display-1">
    //     Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam, odit!
    //   </p>
    //   <p className="text-warning bg-primary display-6">
    //     Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus, nisi.
    //   </p>
    //   <p className="text-danger bg-warning">
    //     Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, ipsa.
    //   </p>
    //   <p className="text-success bg-info">
    //     Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid,
    //     autem?
    //   </p>
    //   <p className="text-info bg-secondary">
    //     Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo,
    //     doloremque!
    //   </p>
    // </div>
    // <div>
    //   <p className="lead">
    //     Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore unde
    //     architecto cumque quibusdam corporis eligendi doloribus iste laborum
    //     dolorum fugiat hic quae, aliquam nisi quod, nostrum quia fuga culpa
    //     necessitatibus porro aliquid earum officiis iure? Quis corporis officia
    //     adipisci quaerat tenetur, iste neque asperiores dolorum perspiciatis!
    //     Magni voluptas officia dignissimos.
    //   </p>
    //   <p className="">
    //     Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore unde
    //     architecto cumque quibusdam corporis eligendi doloribus iste laborum
    //     dolorum fugiat hic quae, aliquam nisi quod, nostrum quia fuga culpa
    //     necessitatibus porro aliquid earum officiis iure? Quis corporis officia
    //     adipisci quaerat tenetur, iste neque asperiores dolorum perspiciatis!
    //     Magni voluptas officia dignissimos.
    //   </p>
    // </div>
    // <div>
    //   <blockquote class="blockquote">
    //     <p className="text-capitalize">
    //       A well-known quote, contained in a blockquote element.
    //     </p>
    //   </blockquote>
    //   <p className="text-decoration-underline">
    //     Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo
    //     veritatis, dolores soluta illum maiores ratione minus corrupti facere
    //     alias aspernatur in possimus tenetur. Adipisci quia, ex dolorum aperiam
    //     rem amet!
    //   </p>
    //   <p className="text-decoration-line-through">
    //     Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo
    //     veritatis, dolores soluta illum maiores ratione minus corrupti facere
    //     alias aspernatur in possimus tenetur. Adipisci quia, ex dolorum aperiam
    //     rem amet!
    //   </p>
    //   <p className="text-decoration-none">
    //     Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo
    //     veritatis, dolores soluta illum maiores ratione minus corrupti facere
    //     alias aspernatur in possimus tenetur. Adipisci quia, ex dolorum aperiam
    //     rem amet!
    //   </p>
    //   <p className="">
    //     Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo
    //     veritatis, dolores soluta illum maiores ratione minus corrupti facere
    //     alias aspernatur in possimus tenetur. Adipisci quia, ex dolorum aperiam
    //     rem amet!
    //   </p>
    // </div>
    // <div className="bg-warning fw-bold fst-italic text-white text-start">
    //   Lorem ipsum dolor sit amet.
    // </div>
    <div>
      <ul className="list-group w-50">
        <li className="list-group-item active disabled">HTML</li>
        <li className="list-group-item">CSS</li>
        <li className="list-group-item">JS</li>
        <li className="list-group-item">BS</li>
        <li className="list-group-item">REACT</li>
      </ul>
      <div className="list-group list-group-flush w-25">
        <a href="" className="list-group-item list-group-item-action">
          Link1
        </a>
        <a href="" className="list-group-item list-group-item-action">
          Link2
        </a>
      </div>
      {/* <button className="btn">First</button>
      <button className="btn btn-primary">Second</button>
      <button className="btn btn-outline-primary">third</button>
      <button className="btn btn-danger btn-lg">fourth</button> */}
    </div>
  );
}

export default Home;
