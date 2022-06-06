import React, { useState } from "react";
import { getRandomColor } from "./randomColorGenerator.js";
import Child from "./Child";

function Parent() {
  const randomColor = getRandomColor();
  const [color, setColor] = useState(randomColor);
  /* New state variable. Change Child component color.*/
  const [childrenColor, setChildrenColor] = useState("#FFF");
  /////////////////////////////////////////// 
  /* Callback function that Updates state. */
  ///////////////////////////////////////////
  function handleChangeColor(newChildColor) {
    const newRandomColor = getRandomColor();
    //////////////////////////////////////
    /* Changes state for Parent color. */
    //////////////////////////////////////
    setColor(newRandomColor);
    //////////////////////////////////////
    /* Changes state for Child color. */
    //////////////////////////////////////
    setChildrenColor(newChildColor);
  }

  return (
    <div className="parent" style={{ backgroundColor: color }}>
      {/* Passing handleChangeColor callback as 
          onChangeColor prop to Child. */}
      <Child color={childrenColor} onChangeColor={handleChangeColor} />
      <Child color={childrenColor} onChangeColor={handleChangeColor} />
    </div>
  );
}

export default Parent;
