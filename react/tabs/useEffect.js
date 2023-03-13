/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import axios from "axios";
import './useEffect.css'

function UseEffect() {
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);

  function handleClick(e, index) {
    e.preventDefault();
    setCart([...cart, index]);
  }

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    async function fetchData() {
      const result = await axios.get("https://dummyjson.com/products");
      //   console.log(result.data.products);
      setProducts(result.data.products);
    }
    fetchData();
  }, []);
  return (
    <>
      <header>
        <h1>Logo</h1>
        <ul>
          <li>
            <a href="">
              Cart <span>{cart.length}</span>
            </a>
          </li>
        </ul>
      </header>

      <section>
        <div className="products">
          {products.map((product, index) => {
            return (
              <div className="product">
                <img src={product.thumbnail} alt={product.title}></img>
                <div className="content">
                  <h3>{product.title}</h3>
                  <p>{product.price}</p>
                  <a href="" onClick={(e) => handleClick(e, index)}>Add To Cart</a>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}

export default UseEffect;
