import React from "react";

// Template Literal: ``

function Section(props) {
  return (
    // <div
    //   className="section"
    //   style={{ backgroundImage: "url(images/" + props.backgroundImg + ")" }}
    // >


    <div
      className="section"
      style={{ backgroundImage: `url(images/${props.backgroundImg})` }}
    >

      <div className="carName">
        <h1>{props.name}</h1>
        <p>{props.desc}</p>
      </div>
      <div className="buttons">
        <div className="cta">
          <a href="">{props.leftBtn}</a>
          {props.rightBtn && <a href="">{props.rightBtn}</a>}
        </div>
        {props.downArrow && <img src="images/down-arrow.svg"></img>}
      </div>
    </div>
  );
}

export default Section;
