import { useState } from "react";
import "./App.css";
import Item from "./Components/Item";
import TopBanner from "./Components/TopBanner";

function App() {
  const [counter, setcounter] = useState(0);
  const state = {
    counter: counter,
    setCounter: setcounter,
  };

  return (
    <div className="App">
      <TopBanner />
      <div
        style={{ backgroundColor: "aqua" }}
      >{`Items in Cart = ${counter}`}</div>
      <div className="Main">
        <Item
          state={state}
          text="This is a Cake Slice"
          url="https://media.istockphoto.com/id/903494838/photo/triangle-shape-slice-piece-of-chocolate-fudge-cake-decorated-with-chocolate-curl-on-white.jpg?s=612x612&w=0&k=20&c=0fPve8ccjObRHtqsMFVwP5j_oL07V5Am5AVu4izPApI="
        />
        <Item
          state={state}
          text="This is a Cake Slice"
          url="https://thumbs.dreamstime.com/b/plate-slice-chocolate-sponge-berry-cake-white-background-plate-slice-chocolate-sponge-berry-cake-124438250.jpg"
        />
        <Item
          state={state}
          text="This is a Cake Slice"
          url="https://thumbs.dreamstime.com/b/plate-slice-chocolate-sponge-berry-cake-white-background-plate-slice-chocolate-sponge-berry-cake-124438250.jpg"
        />
        <Item
          state={counter}
          text="This is a Cake Slice"
          url="https://thumbs.dreamstime.com/b/plate-slice-chocolate-sponge-berry-cake-white-background-plate-slice-chocolate-sponge-berry-cake-124438250.jpg"
        />
      </div>
    </div>
  );
}

export default App;
