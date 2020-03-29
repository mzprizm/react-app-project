import React from "react";
import App from "../App";
import About from "./About";
import Header from "./Header";
import Footer from "./Footer";
import { Route, Link, Redirect, Switch } from 'react-router-dom';

export default function Bridge() {
  console.log("About.js: ");

  return (
    <>
      <div className="Bridge-App">
      <Header />
      <hr />
      <Switch>
	      <Route exact path="/" component={App}/>
	      <Route exact path="/App" component={App}/>
	      <Route exact path="/about" component={About}/>
       <Route path="/" component={App}/>
       <Redirect to="/" />
       </Switch>
       <hr />
       <Footer />
      </div>
    </>
  );
}