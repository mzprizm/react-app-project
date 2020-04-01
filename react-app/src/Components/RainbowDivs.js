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
      <Flex flex-wrap="wrap" flexDirection="row" justify-content="space-around" >
   <>
           <div style={{background: "#DC143C", height: "100px", width: "100px"}}>
        <p>#DC143C</p>
        </div>


                   <div className="rainbowbox" style={{background: "#FF4500", height: "100px", width: "100px"}}>
        <p>#FF4500</p>
        </div>

                   <div style={{background: "#0000FF", height: "100px", width: "100px"}}>
        <p>"#0000FF"</p>
        </div>

                   <div style={{background: "#4B0082", height: "100px", width: "100px"}}>
        <p>#4B0082</p>
        </div>

                   <div style={{background: "#8F00FF", height: "100px", width: "100px"}}>
        <p>#8F00FF</p>
        </div>

                   <div style={{background: "#483D8B", height: "100px", width: "100px"}}>
        <p>"#483D8B"</p>
        </div>

                   <div style={{background: "#20B2AA", height: "100px", width: "100px"}}>
        <p>#20B2AA</p>
        </div>

                   <div style={{background: "#1E90FF", height: "100px", width: "100px"}}>
        <p>"#1E90FF"</p>
        </div>

                   <div style={{background: "#BC8F8F", height: "100px", width: "100px"}}>
        <p>#BC8F8F</p>
        </div>

                   <div style={{background: "#FF1493", height: "100px", width: "100px"}}>
        <p>"#FF1493"</p>
        </div>

                   <div style={{background: "#3CB371", height: "100px", width: "100px"}}>
        <p>#3CB371</p>
        </div>


                   <div style={{background: "#FF8C00", height: "100px", width: "100px"}}>
        <p>#FF8C00</p>
        </div>
</>

      </Flex>
  );
};
