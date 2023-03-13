import React, { createContext, useState } from "react";
import Header from "./Header";
import Products from "./Products";
import Sidebar from "./Sidebar";

export const EcommerceContext = createContext({});

function Main() {
  const [cart, setCart] = useState([]);
  return (
    <EcommerceContext.Provider value={{ cart, setCart }}>
      <Sidebar />
      <Header />
      <Products />
    </EcommerceContext.Provider>
  );
}

export default Main;
