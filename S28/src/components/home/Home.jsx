import React from "react";
import "./Home.css";
import { useSelector } from "react-redux";
function Home() {
  const city = useSelector((storedata) => {
    return storedata.city;
  });
  return (
    <div className="home">
      <h1 className="text-danger my-4">Home Component :{city}</h1>
      <p className="text-primary">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque eum
        recusandae accusamus adipisci. Magni modi dolorem rem nam beatae hic ab
        esse earum. Suscipit consequuntur totam ut molestias animi atque illum
        quisquam dolores qui asperiores. Ab atque et molestias itaque quas
        eveniet excepturi minima exercitationem pariatur eligendi quibusdam qui
        ratione temporibus harum explicabo libero deleniti, natus earum
        provident. Fugiat velit consectetur impedit aliquid veritatis ut? Sequi
        ipsum, at unde, quos quisquam rem deserunt inventore doloribus a cumque
        repudiandae officiis ea nulla doloremque ex quo harum fugiat suscipit
        maiores enim nesciunt aspernatur velit ipsam atque! Itaque illum
        reprehenderit reiciendis ex ad.
      </p>
    </div>
  );
}

export default Home;