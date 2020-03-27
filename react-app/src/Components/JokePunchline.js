import React, { useState } from "react";

export default function JokePunchline(props) {
  console.log("JokePunchline.js - props.json[0] ", props.json[0]);
  const [showing, setShowing] = useState(true);
  const [hidden, setHidden] = useState(true);

  return (
    <>
      <div className="jokes-row" onClick={() => setHidden(!hidden)}>
        {hidden ? "click to reveal!" : `${props.json[0].punchline}`}
      </div>
    </>
  );
}
