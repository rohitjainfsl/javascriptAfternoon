/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect, useContext} from "react";
import axios from "axios";
import {EcommerceContext}  from "./Main";

function Products() {  
  const {cart, setCart} = useContext(EcommerceContext)

  const [products, setProducts] = useState([]);
  
  function handleAddToCart(e, product) {
    e.preventDefault();
    setCart([...cart, product]);
  }

  console.log(cart)

  useEffect(() => {
    async function fetchData() {
      const result = await axios.get("https://fakestoreapi.com/products");
      setProducts(result.data);
    }
    fetchData();
  }, []);

  return (
    <div className="products">
      <h2>Products</h2>
      <div className="products-container">
        {products.map((product) => {
          return (
            <div className="product" key={product.id}>
              <img src={product.image} alt={product.title} />
              <h4>{product.title}</h4>
              <a href="" onClick={(e) => handleAddToCart(e, product)}>
                Add To Cart
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Products;
