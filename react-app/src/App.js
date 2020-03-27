import React, { useState, useEffect } from "react";
import "./styles.css";
import Button from "./Components/Button";
import Header from "./Components/Header";
import JokeSetup from "./Components/JokeSetup";
import JokePunchline from "./Components/JokePunchline";

export default function App() {
  const [joke, setJoke] = useState("");
  const [clicked, setClicked] = useState({});

  const jokeURL = `https://official-joke-api.appspot.com/jokes/general/random`;

  const makeApiCall = async () => {
    const res = await fetch(jokeURL);
    const json = await res.json();
    console.log(json);
  };

  const handleClick = async  => {
    setJoke();
  };

  return (
    <div className="App">
      <h1>joke generator</h1>
      <Header />
      <div><br /></div>
      <JokeSetup />
      <div><br /></div>
      <JokePunchline />
      <p>click the button to generate a joke!!</p>
      <Button handleClick={handleClick} />
    </div>
  );
}
