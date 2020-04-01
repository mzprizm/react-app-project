import React from "react";
import RainbowDivs from "./RainbowDivs";

function Rainbow(props) {
  // const joke = props;
  // console.log(joke);

// randomcolors.map

  return (
    <>
      <div style={{background: "gray", color: "white", padding: "20px"}}>
        <RainbowDivs />
      </div>
    </>
  );
}

export default Rainbow;
