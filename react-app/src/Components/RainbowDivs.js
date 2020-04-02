import React from "react";
import App from "../App";
import Flex from "./Flex";

export default function RainbowDivs() {
	// const randomcolors = props.randomcolors.map( (color,i) => {]
	// 	return (
	// 		RainbowDiv)})
 //  const joke = props;
        // const randomcolors = [", "#", "#", "#", "#FF8C00" ]

  return (
      <Flex flex-wrap="wrap" flexDirection="row" justify-content="space-around" align-items="center">
   <>
                   <div className="rainbowbox" style={{background: "#DC143C"}}></div>
                   <div> </div>
                   <div className="rainbowbox" style={{background: "#FF4500"}}></div>
                   <div> </div>
                   <div className="rainbowbox" style={{background: "#0000FF"}}></div>
                   <div> </div>
                   <div className="rainbowbox" style={{background: "#4B0082"}}></div>
                   <div> </div>
                   <div className="rainbowbox" style={{background: "#8F00FF"}}></div>
                   <div> </div>
                   <div className="rainbowbox" style={{background: "#483D8B"}}></div>
                   <div> </div>
                   <div className="rainbowbox" style={{background: "#20B2AA"}}></div>
                   <div> </div>
                   <div className="rainbowbox" style={{background: "#1E90FF"}}></div>
                   <div> </div>
                   <div className="rainbowbox" style={{background: "#BC8F8F"}}></div>
                   <div> </div>
                   <div className="rainbowbox" style={{background: "#FF1493"}}></div>
                   <div> </div>
                   <div className="rainbowbox" style={{background: "#3CB371"}}></div>
                   <div> </div>
                   <div className="rainbowbox" style={{background: "#FF8C00"}}></div>
</>

      </Flex>
  );
};
