import React from "react";
import Flex from "./Flex";
import Emoji from "./Emoji";
import { Link } from 'react-router-dom';


export default function Header() {

  return (
    <>
    <Flex alignItems="top" display="block" flexDirection="column" justifyContent="flex-end" background-color="black" color="white">
          <h1>Infinite Jokes Generator</h1>
      </Flex>
      <Flex alignItems="top" flexDirection="row" justifyContent="space-around">
            <div></div>
            <div></div>
            <div className="header-link"><Link to="/About"><Emoji symbol="✨" label="sparkles"/>
 ABOUT <Emoji symbol="✨" label="sparkles"/></Link></div>
            <br />
            <div className="header-link"><Link to="/App"><Emoji symbol="✨" label="sparkles"/>JOKES<Emoji symbol="✨" label="sparkles"/></Link></div>
            <br />
              <div className="header-link"><Link to="/Rainbow"><Emoji symbol="✨" label="sparkles"/>RAINBOW<Emoji symbol="✨" label="sparkles"/></Link></div>
              <div></div>
              <div></div>
      </Flex>
        </>
  );
}