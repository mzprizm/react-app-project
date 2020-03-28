import React, { useState } from "react";
import "./styles.css";
import Button from "./Components/Button";
import JokeSetup from "./Components/JokeSetup";
import JokePunchline from "./Components/JokePunchline";
import colors from "./colors.js";

export default function App() {
  // const [hidden, setHidden] = useState(true);

  const [json, setJSON] = useState("jokesURL");
  const [showing, setShowing] = useState(false);
  const [concealedPunchline, setConcealedPunchline] = useState(true);

  const handleSubmitonApp = async () => {
    const jokesURL = `https://official-joke-api.appspot.com/jokes/general/random`;
    let res = await fetch(jokesURL);
    let json = await res.json();
    console.log("adding joke json object", json);
    setJSON(json);
    setShowing(true);
    setConcealedPunchline(true);
    // console.log("App - setshowing - showing: ", showing);
    // console.log("App - sethidden - hidden: ", hidden);
  };

  // console.log("App - hidden value: ", hidden)

  if (!showing)
    return (
      <>
        <div className="App">
          <h1>Infinite Jokes Generator 3.0</h1>
          <br />
          <br />
          <Button handleSubmitonApp={handleSubmitonApp} />
        </div>
      </>
    );
  else
    return (
      <>
        <div className="App">
          <h1>Infinite Jokes Generator 3.0</h1>
          <JokeSetup json={json} />
          <br />
          <JokePunchline
            json={json}
            concealedPunchline={concealedPunchline}
            setConcealedPunchline={setConcealedPunchline}
          />
          <br />
          <Button handleSubmitonApp={handleSubmitonApp} />
        </div>
      </>
    );
}
