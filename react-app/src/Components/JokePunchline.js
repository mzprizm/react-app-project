import React from "react";
import '../styles.css';

export default function JokePunchline(props) {
  console.log("JokePunchline.js - props.json[0] ", props.json[0]);
  const punchline = props.json[0].punchline;
  console.log("JokePunchline - punchline: ", punchline);

  // if (!concealedPunchline) return (
  //   <>
  //     <div className="jokes-row" onClick={() => setConcealedPunchline(concealedPunchline)}>
  //       This punchline is coming in not concealed
  //       {punchline}
  //     </div>
  //   </>
  // );

  if (!props.concealedPunchline) {
    return (
      <>
        <div
          className="jokes-row"
          onClick={() => props.setConcealedPunchline(props.concealedPunchline)}
        >
          <br />
          {punchline}
        <br />
        </div>
      </>
    );
  }

  return (
    <>
      <div
        className="jokes-row"
        text="this is concealed"
        onClick={() => props.setConcealedPunchline(!props.concealedPunchline)}
        // {concealedPunchline ? "click to reveal" : `${props.json[0].punchline}`}
      >
       <br />
        <span className="reveal">Click to reveal the punchline!</span>
      <br />
      </div>
    </>
  );
}
