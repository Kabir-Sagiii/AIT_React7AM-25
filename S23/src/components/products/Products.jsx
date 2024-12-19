import { useState } from "react";
import "./PRoducts.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function Products() {
  let [products, setProducts] = useState([]);
  const navigate = useNavigate();
  const getAllProducts = () => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((error) => {
        alert("Something went wrong");
      });
  };

  const getElectronicsProducts = () => {
    axios
      .get("https://fakestoreapi.com/products/category/electronics")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((error) => {
        alert("Something went wrong");
      });
  };

  const getJeweleryProducts = () => {
    axios
      .get("https://fakestoreapi.com/products/category/jewelery")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((error) => {
        alert("Something went wrong");
      });
  };

  const getMensClothingProducts = () => {
    axios
      .get("https://fakestoreapi.com/products/category/men's clothing")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((error) => {
        alert("Something went wrong");
      });
  };

  const getWomensClothingProducts = () => {
    axios
      .get("https://fakestoreapi.com/products/category/women's clothing")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((error) => {
        alert("Something went wrong");
      });
  };

  return (
    <div className="products">
      <h2>Products Information</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla iusto
        ipsa enim ab autem beatae libero magnam, mollitia, qui minima, iste
        omnis id eos! Tempore, dignissimos in. Mollitia debitis accusamus
        blanditiis ut distinctio aliquid, est deleniti et impedit laudantium
        illo aspernatur consequuntur id esse in dolorem totam excepturi
        reprehenderit. Iure, eos? Atque facere, sunt consequuntur iste fugit est
        accusamus dignissimos, neque alias amet ipsum enim itaque quo nam
        obcaecati molestias voluptate impedit minus provident vero beatae
        blanditiis animi at pariatur? Totam illo quos, eveniet quidem dolor modi
        mollitia repellat reiciendis nam deleniti. Deleniti iste iure quia
        adipisci asperiores placeat fugit molestiae blanditiis cupiditate
        dignissimos, nihil nulla ipsam, molestias tempore accusantium omnis modi
        animi. Culpa ducimus ullam odio. Ut minima facere quisquam repellendus
        molestias? Libero ullam molestias delectus fugit voluptates optio
        excepturi! Iste ipsum totam sit, nihil culpa, quis modi omnis tempora
        eaque corporis obcaecati unde consequatur blanditiis natus odio. Vel
        obcaecati ad voluptatum nisi adipisci laboriosam itaque veniam. Soluta
        labore commodi vitae dolore a consectetur veniam quod. Impedit, ratione
        numquam. Voluptatibus necessitatibus ex recusandae adipisci corporis
        unde voluptatum enim dicta, pariatur tenetur obcaecati quis, porro
        laboriosam aut iusto soluta aperiam quisquam et facere cum delectus
        laudantium omnis. Minima, ad facilis.
      </p>
      <button onClick={getAllProducts}>Get Products</button>

      {products.length > 0 && (
        <div className="categories">
          <div>
            <input
              type="radio"
              name="category"
              defaultChecked
              onChange={getAllProducts}
            />
            <label>ALL</label>
          </div>

          <div>
            <input
              type="radio"
              name="category"
              onChange={getElectronicsProducts}
            />
            <label>Electronics</label>
          </div>
          <div>
            <input
              type="radio"
              name="category"
              onChange={getJeweleryProducts}
            />
            <label>Jewelery</label>
          </div>
          <div>
            <input
              type="radio"
              name="category"
              onChange={getMensClothingProducts}
            />
            <label>MensClothing</label>
          </div>
          <div>
            <input
              type="radio"
              name="category"
              onChange={getWomensClothingProducts}
            />
            <label>WomensClothing</label>
          </div>
        </div>
      )}

      {products.length > 0 ? (
        <div className="productsContainer">
          {products.map((product) => {
            return (
              <div className="card">
                <img
                  src={product.image}
                  width={"100%"}
                  height={200}
                  alt="product"
                />
                <h4>{product.title.slice(0, 20)}</h4>
                <p>${product.price}</p>
                {/* <Link to="/productdetails">
                  <button>Product Details</button>
                </Link> */}
                <button
                  onClick={() => {
                    navigate(`/productdetails/${product.id}`);
                  }}
                >
                  Product Details
                </button>
                <button>Add to Cart</button>
              </div>
            );
          })}
        </div>
      ) : (
        <h2 className="noProducts">No Products To Display</h2>
      )}
    </div>
  );
}

export default Products;
