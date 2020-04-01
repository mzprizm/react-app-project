import React from "react";
import Flex from "./Flex";
import { Link } from 'react-router-dom';


export default function Header() {

  return (
    <>
    <Flex alignItems="top" display="block" flexDirection="column" justifyContent="flex-end">
          <h1>Infinite Jokes Generator 3.0</h1>
      </Flex>
      <Flex alignItems="top" flexDirection="row" justifyContent="space-around">
            <div></div>
            <div></div>
            <div><Link to="/About">ABOUT</Link></div>
            <br />
            <div><Link to="/App">JOKES</Link></div>
            <br />
              <div><Link to="/Rainbow">RAINBOW</Link></div>
              <div></div>
              <div></div>
      </Flex>
    <Flex alignItems="top" display="block" flexDirection="column" justifyContent="flex-end">
       <br />
       <span><em>~ a place to be delighted ~ </em></span>
       <br />
    </Flex>
        </>
  );
}