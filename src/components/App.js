import React, { Component, useState, useEffect } from "react";
import "../styles/App.css";

const App = () => {
  const [renderBall, setRenderBall] = useState(false);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [ballPosition, setBallPosition] = useState({
    left: "0px",
    top: "0px",
    position: "absolute"
  });
  let valx=0;
  let valy=0;
  const reset = () => {
    setRenderBall(false);
    valx=0;
    valy=0;
    setBallPosition({
      left: "0px",
      top: "0px",
      position: "absolute"
    });
  };
  const start = () => {
    setRenderBall(true);
    document.addEventListener("keydown", handlekey);
  };
 /* useEffect(() => {
    setBallPosition({ left: `${x}px`, top: `${y}px`, position: `absolute` });
  });*/
  const handlekey = (event) => {
    console.log(event.key);
    if (event.key === "ArrowRight") {
      valx+=5;
    } else if (event.key === "ArrowLeft") {
      valx-=5;
    } else if (event.key === "ArrowUp") {
      valy-=5;
    } else if (event.key === "ArrowDown") {
      valy+=5;
    }
   
    setBallPosition({ left: `${valx}px`, top: `${valy}px`, position: `absolute` });
  };

  const renderChoice = () => {
    if (!renderBall) {
      return (
        <button onClick={start} className="start">
          Start
        </button>
      );
    } else return <div style={ballPosition} className="ball"></div>;
  };

  return (
    <div className="playground">
      <button onClick={reset} className="reset">
        Reset
      </button>
      {renderChoice()}
    </div>
  );
};

export default App;
