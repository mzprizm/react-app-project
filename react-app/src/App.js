/* IMPORTS */
import React, { useState } from "react";
import "./styles.css";
import Button from "./Components/Button";
import JokeSetup from "./Components/JokeSetup";
import JokePunchline from "./Components/JokePunchline";
import Link from "react-router-dom";

export default function App() {
/* USESTATES */ 
  const [json, setJSON] = useState("jokesURL");
  const [showing, setShowing] = useState(false);
  const [concealedPunchline, setConcealedPunchline] = useState(true);
  const [randomcolor, setRandomColor] = useState('');

/* ARRAY */ 
  const randomcolors = [ "#DC143C", "#FF4500", "#0000FF", "#4B0082", "#8F00FF", "#20B2AA", "#1E90FF", "#483D8B", "#BC8F8F", "#FF1493", "#3CB371", "#FF8C00" ]

/* FUNCTIONS */ 
  const handleSubmitonApp = async () => {
    const jokesURL = `https://official-joke-api.appspot.com/jokes/general/random`;
    let res = await fetch(jokesURL);
    let json = await res.json();
    setJSON(json);
    setShowing(true);
    setConcealedPunchline(true);
    setRandomColor(makeRandomColor());
  };

  function makeRandomColor() {
    let randomIndex = Math.floor((Math.random()*(randomcolors.length)))
    return randomcolors[randomIndex]; 
  };

/* Render */ 
  /* first render */ 
  if (!showing)
    return (
      <>
        <div className="App">
          <br />
          <br />
          <Button handleSubmitonApp={handleSubmitonApp} />
        </div>
      </>
    );
 

  /* after the first time, renders this: */
  else
    return (
      <>
        
        <div className="App">
          <JokeSetup json={json} />
          <br />
          <JokePunchline
            json={json}
            concealedPunchline={concealedPunchline}
            setConcealedPunchline={setConcealedPunchline}
            randomcolor={randomcolor}
            randomcolors={[randomcolors]}
          />
          <br />
          <Button handleSubmitonApp={handleSubmitonApp} />
        </div>
      </>
    );
}
