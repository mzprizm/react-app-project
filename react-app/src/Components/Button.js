import React, { useState } from "react";

export default function Form(props) {
  const [joke, setJoke] = useState("");

  const handleClick= e => {
    e.preventDefault();
    props.handleClick(joke);
    setJoke("");
    console.log("joke set to blank by form");
  };

  return <button onClick={handleClick}>Click me!</button>;
}
