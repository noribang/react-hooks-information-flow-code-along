import React from "react";
import { getRandomColor } from "./randomColorGenerator.js";

function Child({ onChangeColor, color }) {
  // console.log(onChangeColor)
  function handleClick() {
    const newColor = getRandomColor()
    /* Callback from Parent. */
    onChangeColor(newColor)
  }


  return <div
            /* Used onChangeColor as event handler. */
            // onClick={onChangeColor} 
            onClick={handleClick}
            className="child" 
            /* color props sent down by Parent */
            style={{ backgroundColor: color }} 
          />;
}

export default Child;
