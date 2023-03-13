import React, { useContext, useState } from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import {EcommerceContext} from "./Main";

function Sidebar() {
  const { cart } = useContext(EcommerceContext);
  const [sidebarOpen, setSidebarOpen] = useState(false)

  function handleSidebarDraw() {
    setSidebarOpen(!sidebarOpen);
  }
  const arrowStyle = sidebarOpen
    ? { transform: "rotateY(180deg)" }
    : { transform: "rotateY(0)" };

  return (
    <aside style={{ left: sidebarOpen ? 0 : "-300px" }}>
      <div className="handle" onClick={handleSidebarDraw}>
        <ArrowForwardIosIcon style={arrowStyle} />
      </div>
      <h3>Cart</h3>
      <ul>
        {cart.map((c) => {
          return <li key={c.id}>{c.title}</li>;
        })}
      </ul>
    </aside>
  );
}

export default Sidebar;
