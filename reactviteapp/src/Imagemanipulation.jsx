import React, { useState } from "react";
import cat from "./cat.jpg";

function ImageManipulation() {
  const [height, setHeight] = useState(100);
  const [width, setWidth] = useState(100);
  const [rotate, setRotate] = useState(0);
  const [red, setRed] = useState(255);
  const [green, setGreen] = useState(153);
  const [blue, setBlue] = useState(153);

  function enhanceHeight() {
    setHeight((prevHeight) => prevHeight + 30);
  }

  function enhanceWidth() {
    setWidth((prevWidth) => prevWidth + 30);
  }

  function rotateImage() {
    setRotate((prevRotate) => prevRotate + 30);
  }

  function changeBackground() {
    setRed(Math.floor(Math.random() * 256));
    setGreen(Math.floor(Math.random() * 256));
    setBlue(Math.floor(Math.random() * 256));
  }

  const bgColor = `rgb(${red}, ${green}, ${blue})`;

  return (
    <div
      style={{
        border: "2px solid red",
        height: "300px",
        width: "400px",
        margin: "20px auto",
        backgroundColor: "grey", 
        textAlign: "center",
        paddingTop: "10px",
      }}
    >
      <div
        style={{
          margin: "0 auto",
          border: "1px solid black",
          height: "200px",
          width: "200px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          overflow: "hidden",
          backgroundColor: bgColor, 
        }}
      >
        <img
          src={cat}
          style={{
            transform: `rotate(${rotate}deg)`,
            height: `${height}px`,
            width: `${width}px`,
            transition: "transform 0.5s, height 0.5s, width 0.5s",
          }}
          alt="cat"
        />
      </div>
      <div style={{ marginTop: "10px" }}>
        <button onClick={enhanceHeight} style={{ margin: "5px" }}>
          Enhance Height
        </button>
        <button onClick={enhanceWidth} style={{ margin: "5px" }}>
          Enhance Width
        </button>
        <button onClick={rotateImage} style={{ margin: "5px" }}>
          Rotate
        </button>
        <button onClick={changeBackground} style={{ margin: "5px" }}>
          Change Background
        </button>
      </div>
    </div>
  );
}

export default ImageManipulation;
