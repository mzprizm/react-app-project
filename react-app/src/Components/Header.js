import React from "react";
import { Link } from 'react-router-dom';


export default function Header() {
  console.log("Header.js: ");

  return (
    <>
     <h1>Infinite Jokes Generator 3.0</h1>
      <div className="Header-row">
        <br />
        <Link to="/About">ABOUT</Link>
        <br />
        <Link to="/App">JOKES</Link>
      </div>
    </>
  );
}