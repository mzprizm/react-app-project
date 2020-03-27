import React from "react";

function Button(props) {
  const handleSubmit = e => {
    e.preventDefault();
    props.handleSubmit();
  };

  return (
    <button type="button" onClick={handleSubmit}>
      get joke!
    </button>
  );
}

export default Button;
