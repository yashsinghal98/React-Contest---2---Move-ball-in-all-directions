import React, { Component, useState } from "react";
import "../styles/App.css";

const App = () => {
  const [renderBall, setRenderBall] = useState(false);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [ballPosition,setBallPosition] = useState({
    left: "0px",
    top: "0px",
  });
  const reset = () => {
    console.log("stop");
    setRenderBall(false);
    setX(0);
    setY(0);
    let temp={...ballPosition};
    temp.left=`0px`;
    temp.top='0px';
    setBallPosition(temp);
  };
  let handlekey=function(event){
    console.log(event.key);
    let temp={...ballPosition};
    let valx=x;
    let valy=y;
    if(event.key==="ArrowRight")
    {
      temp.left=`${valx+5}px`;
      valx+=5;
      setX(valx);
    }
    else if(event.key==="ArrowDown")
    {
      temp.top=`${valy+5}px`;
      valy+=5;
      setY(valy);
    }
    else if(event.key==="ArrowUp")
    {
      temp.top=`${valy-5}px`;
      valy-=5;
      setY(valy);
    }
    else if(event.key==="ArrowLeft")
    {
      temp.left=`${valx-5}px`;
      valx-=5;
      setX(valx);
    }
    setBallPosition(temp);
}
  let buttonClickHandler=()=>{
    setRenderBall(true);
    document.addEventListener("keydown",()=>{handlekey(event)});
  }
  let renderChoice = () => {
    if(renderBall){return <div className="ball" style={ballPosition}></div>}
		 else   return <button onClick={buttonClickHandler} className="start">Start
     </button>
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
