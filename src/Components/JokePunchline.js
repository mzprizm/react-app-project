import React from "react";
import '../styles.css';

export default function JokePunchline(props) {
  console.log("JokePunchline.js - props.json[0] ", props.json[0]);
  const punchline = props.json[0].punchline;
  console.log("jokepunchline.js - randomcolor: ", props.randomcolor)

  if (!props.concealedPunchline) {
    return (
      <>
        <div
          className="jokes-row-revealed"
          onClick={() => props.setConcealedPunchline(props.concealedPunchline)}
        >
          <br />
          <span style={{color: props.randomcolor}}>{punchline}</span>
        <br />
        </div>
      </>
    );
  }

  return (
    <>
      <div
        className="jokes-row-concealed" 
      
        onClick={() => props.setConcealedPunchline(!props.concealedPunchline)}
      >
       <br />
        <span className="reveal">Click to reveal the punchline!</span>
      <br />
      </div>
    </>
  );
}
