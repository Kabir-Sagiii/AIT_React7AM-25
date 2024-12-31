import React from "react";
import "./Home.css";

function Home() {
  return (
    <div className="mt-5 bg-dark p-3 mx-auto">
      <div
        className="carousel slide"
        id="myCarousel"
        data-bs-ride="carousel"
        data-bs-interval="500"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://rukminim2.flixcart.com/fk-p-flap/1620/270/image/10dd680ef24c1635.jpeg?q=20"
              width={"100%"}
              height={400}
            />
          </div>
          <div className="carousel-item ">
            <img
              src="https://rukminim2.flixcart.com/fk-p-flap/1620/270/image/750046e5a02693a4.jpeg?q=20"
              width={"100%"}
              height={400}
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://rukminim2.flixcart.com/fk-p-flap/1620/270/image/bfc82a3ff5d1f5b9.jpg?q=20"
              width={"100%"}
              height={400}
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://rukminim2.flixcart.com/fk-p-flap/1620/270/image/d9290fb51138d286.png?q=20"
              width={"100%"}
              height={400}
            />
          </div>
        </div>
      </div>

      {/* <div className="mt-5 ms-5 me-5 mb-5">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit saepe
        doloribus sequi, ad et aspernatur cumque unde quod inventore ipsa
        possimus dicta minima ratione laudantium officiis nihil ea quia
        perferendis quisquam nostrum atque expedita id nesciunt. Expedita alias
        labore molestiae vero eum iure illo incidunt nam dolore, sed voluptate
        necessitatibus reprehenderit consequuntur atque porro natus ipsam ab
        velit voluptates. Vero facere culpa quae voluptatum tenetur, ex non
        voluptatem saepe? Expedita odio, necessitatibus hic doloribus
        perferendis ipsa fuga in. Fuga dignissimos aperiam eveniet architecto
        possimus ipsa sint dolores dolorem, tenetur excepturi consequatur
        aliquam natus ducimus repudiandae maxime expedita eligendi tempore iure?
      </div>
      <div className="m-5">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit saepe
        doloribus sequi, ad et aspernatur cumque unde quod inventore ipsa
        possimus dicta minima ratione laudantium officiis nihil ea quia
        perferendis quisquam nostrum atque expedita id nesciunt. Expedita alias
        labore molestiae vero eum iure illo incidunt nam dolore, sed voluptate
        necessitatibus reprehenderit consequuntur atque porro natus ipsam ab
        velit voluptates. Vero facere culpa quae voluptatum tenetur, ex non
        voluptatem saepe? Expedita odio, necessitatibus hic doloribus
        perferendis ipsa fuga in. Fuga dignissimos aperiam eveniet architecto
        possimus ipsa sint dolores dolorem, tenetur excepturi consequatur
        aliquam natus ducimus repudiandae maxime expedita eligendi tempore iure?
      </div>
      <div className="my-5">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit saepe
        doloribus sequi, ad et aspernatur cumque unde quod inventore ipsa
        possimus dicta minima ratione laudantium officiis nihil ea quia
        perferendis quisquam nostrum atque expedita id nesciunt. Expedita alias
        labore molestiae vero eum iure illo incidunt nam dolore, sed voluptate
        necessitatibus reprehenderit consequuntur atque porro natus ipsam ab
        velit voluptates. Vero facere culpa quae voluptatum tenetur, ex non
        voluptatem saepe? Expedita odio, necessitatibus hic doloribus
        perferendis ipsa fuga in. Fuga dignissimos aperiam eveniet architecto
        possimus ipsa sint dolores dolorem, tenetur excepturi consequatur
        aliquam natus ducimus repudiandae maxime expedita eligendi tempore iure?
      </div> */}
    </div>
  );
}

export default Home;
