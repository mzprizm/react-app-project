import React from "react";
import RainbowDivs from "./RainbowDivs";

function Rainbow(props) {
  // const joke = props;
  // console.log(joke);

// randomcolors.map

  return (
    <>
      <div className="rainbow-row" style={{background: "blue"}}>
        <br />
        Colors Displayed by Rainbow
        <RainbowDivs />
      </div>
    </>
  );
}

export default Rainbow;
