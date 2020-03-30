import React from "react";
import Social from "./Social.js";
import { Link } from 'react-router-dom';


export default function Header() {

  return (
    <>
      <div className="header-row">
        <div>
          <h1>Infinite Jokes Generator 3.0</h1>
        </div>
          <div>
            <Link to="/About">ABOUT</Link>
          </div>
          <div>
            <Link to="/App">JOKES</Link>
           </div>
          <div>
           <Social />
           </div>
            <div>
              <Link to="/Rainbow">RAINBOW</Link>
            </div>
      </div>
    </>
  );
}