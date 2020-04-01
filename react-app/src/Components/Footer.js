import React from "react";
import Emoji from "./Emoji";

export default function Footer() {
  console.log("Footer.js: ");

  return (
    <>
      <div className="footer">
        <p>created with love in the SF Bay Area <Emoji symbol="🌉" label="golden gate bridge"/> copyright 2020 </p>
      </div>
    </>
  );
}