import React from "react";
import "./Item.css";

function Item(props) {
  const counter = props.state.counter;
  const setCounter = props.state.setCounter;
  const addToCart = () => {
    console.log(" this was printed");
    setCounter(counter + 1);
    console.log("counter = ", counter);
  };
  return (
    <div className="itemDiv">
      {/* <img src= {public/Assets/image2.jpg" alt="Food Item"></img> */}
      <img src={props.url} alt="Text" style={{ width: "240px" }}></img>
      <p style={{ fontFamily: "jokerman" }}>{props.text}</p>
      <button onClick={() => addToCart()}>Add To Cart</button>
    </div>
  );
}

export default Item;
