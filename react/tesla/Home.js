import React from "react";
import Header from "./Header";
import Section from "./Section";
import "./tesla.css";

function Home() {
  return (
    <div>
      <Header />
      <Section
        name="Model 3"
        desc="Order Online for Touchless Delivery"
        leftBtn="Custom Order"
        rightBtn="Existing Inventory"
        downArrow={true}
        backgroundImg='model-3.jpg'
      />
      <Section
        name="Model S"
        desc="Order Online for Touchless Delivery"
        leftBtn="Custom Order"
        rightBtn="Existing Inventory"
        backgroundImg='model-s.jpg'
      />
      <Section
        name="Model X"
        desc="Order Online for Touchless Delivery"
        leftBtn="Custom Order"
        rightBtn="Existing Inventory"
        backgroundImg='model-x.jpg'
        
      />
      <Section
        name="Model Y"
        desc="Order Online for Touchless Delivery"
        leftBtn="Custom Order"
        rightBtn="Existing Inventory"
        backgroundImg='model-y.jpg'
      />
      <Section
        name="Solar Roof"
        desc="Lower Cost Solar Panels in India"
        leftBtn="Order Now"
        rightBtn="Learn More"
        backgroundImg='solar-roof.jpg'
      />
      <Section
        name="Solar Panel"
        desc="Produce Clean Energy from your roof"
        leftBtn="Order Now"
        rightBtn="Learn More"
        backgroundImg='solar-panel.jpg'
      />
      <Section name="Accessories" leftBtn="Order Now" backgroundImg='accessories.jpg' />
    </div>
  );
}

export default Home;
