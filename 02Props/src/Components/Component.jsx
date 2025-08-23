import React from "react";
// import ComponentImg from "./assets/components.png";
function Component(props) {
  return (
    <>
      <li>
        <img src={props.img} alt={props.title} />
        <h1>{props.title}</h1>
        <p>{props.description}</p>
      </li>
    </>
  );
}

export default Component;
