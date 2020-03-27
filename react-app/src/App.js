import React, { useState } from "react";
import "./styles.css";
import Button from "./Components/Button";
import JokeSetup from "./Components/JokeSetup";
import JokePunchline from "./Components/JokePunchline";

export default function App() {
  const [json, setJSON] = useState("jokesURL");
  const [showing, setShowing] = useState(false);
  const [hidden, setHidden] = useState(false);

  const handleSubmit = async () => {
    const jokesURL = `https://official-joke-api.appspot.com/jokes/general/random`;
    let res = await fetch(jokesURL);
    let json = await res.json();
    console.log("adding joke json object", json);
    setJSON(json);
    setShowing(true);
    setHidden(true);
  };

  if (!showing)
    return (
      <>
        <div className="App">
          <h1>Infinite Jokes Generator 3.0</h1>
          <h2>random joke:</h2>
          <br />
          <br />
          <Button handleSubmit={handleSubmit} />
        </div>
      </>
    );
  else
    return (
      <>
        <div className="App">
          <h1>Infinite Jokes Generator 3.0</h1>
          <h2>random joke:</h2>
          <JokeSetup json={json} />
          <br />
          <JokePunchline json={json} />
          <br />
          <Button handleSubmit={handleSubmit} />
        </div>
      </>
    );
}
