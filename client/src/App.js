import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Saved from "./pages/Saved";
import Search from "./pages/Search"


function App(){
  return(
    <Router>
      <Switch>
        <Route exact path='/' component={Search}/>
        <Route exact path='/saved' component={Saved}/>
      </Switch>
    </Router>
  )
}

export default App;
