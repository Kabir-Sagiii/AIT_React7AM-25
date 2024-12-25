import { useEffect, useState } from "react";
import axios from "axios";
import "./Cart.css";
//useEffect-----callback----will be called once comp is loaded
//3.5hr video content
function Cart() {
  const [cart, setCart] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3000/addtocart")
      .then((res) => {
        setCart(res.data);
      })
      .catch(() => {
        alert("not able to get cart data info");
      });
  }, []);

  const removeProductFromCart = (id) => {
    axios
      .delete(`http://localhost:3000/addtocart/${id}`)
      .then(() => {
        alert("removed product from cart");
        axios
          .get("http://localhost:3000/addtocart")
          .then((res) => {
            setCart(res.data);
          })
          .catch(() => {
            alert("not able to get cart data info");
          });
      })
      .catch(() => {
        alert("failed to remove");
      });
  };

  return (
    <div className="cartContainer">
      {cart.length > 0 ? (
        <div className="cartproducts">
          <table width="70%" rules="rows" cellPadding={20}>
            <thead>
              <tr>
                <th>IMAGE</th>
                <th>TITLE</th>
                <th>PRICE</th>
                <th>QTY</th>
                <th>ACTION</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((product) => {
                return (
                  <tr>
                    <td>
                      <img src={product.image} width={100} height={100} />
                    </td>
                    <td>
                      <span>{product.title}</span>
                    </td>
                    <td>
                      <span>{product.price}</span>
                    </td>
                    <td>1</td>
                    <td>
                      <button
                        onClick={() => {
                          removeProductFromCart(product.id);
                        }}
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      ) : (
        <h1 className="noproduct">No products added in the cart</h1>
      )}
    </div>
  );
}

export default Cart;
