import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState({
    image: "",
    id: 0,
    price: 0,
    rating: { rate: 0, count: 0 },
    category: 0,
    title: 0,
    description: "",
  });
  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((res) => {
        console.log(res.data);
        setProduct(res.data);
      })
      .catch(() => {
        alert("Error while fetching single product");
      });
  }, []);
  return (
    <div style={{ padding: "50px" }}>
      <h2>{product.category} Category</h2>
      <img src={product.image} width={300} height={300} />
      <h3>{product.title}</h3>
      <p>${product.price}</p>
      <p>{product.description}</p>
      <button>Add to Cart</button>
    </div>
  );
}

export default ProductDetails;
