import React from "react";

function JokeSetup(props) {
  console.log("Jokes.js - props: ", props);
  console.log("Jokes.js - props.json[0] ", props.json[0]);
  console.log("Jokes.js - props.json[0] ", props.json[0].setup);
  const joke = props;
  console.log(joke);

  return (
    <>
      <div className="jokes-row">
        <br />
        {props.json[0].setup}
      </div>
    </>
  );
}

export default JokeSetup;
