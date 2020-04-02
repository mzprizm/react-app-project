import React from "react";
import Flex from "./Flex";
import Emoji from "./Emoji";
import { Link } from 'react-router-dom';


export default function Header() {

  return (
    <>
    <Flex alignItems="top" display="block" flexDirection="column" justifyContent="flex-end">
          <h1>Infinite Jokes Generator</h1>
      </Flex>
      <Flex className="header-nav" alignItems="top" flexDirection="row" justifyContent="space-around" flexWrap="no-wrap">
            <div></div>
            <div></div>
            <div className="header-link"><Link to="/About"><Emoji symbol="✨" label="sparkles"/>
 <span font-color="black">ABOUT</span> <Emoji symbol="✨" label="sparkles"/></Link></div>
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