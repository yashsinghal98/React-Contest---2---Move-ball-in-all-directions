import React, { Component, useState } from "react";
import "../styles/App.css";

const App = () => {
  const [renderBall, setRenderBall] = useState(false);
 
  const [ballPosition,setBallPosition] = useState({
    left: "0px",
    top: "0px",
  });
  let valx=0;
    let valy=0;
  const reset = () => {
    console.log("stop");
    setRenderBall(false);
    valx=0;
    valy=0;
    let temp={...ballPosition};
    temp.left=`0px`;
    temp.top='0px';
    setBallPosition(temp);
  };
  let handlekey=function(event){
    console.log(event.key);
    let temp={...ballPosition};
    
    if(event.key==="ArrowRight")
    {
      
      valx+=5;
      
    }
    else if(event.key==="ArrowDown")
    {
      
      valy+=5;
     
    }
    else if(event.key==="ArrowUp")
    {
      
      valy-=5;
     
    }
    else if(event.key==="ArrowLeft")
    {
      
      valx-=5;
    
    }
    temp.left=`${valx+5}px`;
    temp.top=`${valy+5}px`;
    setBallPosition(temp);
    console.log(ballPosition);
};
  let buttonClickHandler=()=>{
    document.addEventListener("keydown",()=>{handlekey(event)});
    setRenderBall(true);
    
  };
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
