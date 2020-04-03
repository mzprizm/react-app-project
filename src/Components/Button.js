import React from "react";

export default function Button(props) {
  console.log("Button.js - is returning");
  const handleButtonClick = e => {
    e.preventDefault();
    props.handleSubmitonApp();
  };

  return (
    <button onClick={handleButtonClick}>
      get random joke!
    </button>
  );
};
