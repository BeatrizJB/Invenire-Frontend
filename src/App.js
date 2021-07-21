import './App.css';
import Lists from './components/MyInventories';
import CreateInventory from './components/CreateInventory';

import { Route, Switch } from "react-router-dom";
import React from "react";

function App() {
  return (
    <div className="App">
    <Switch>
    <Route exact path="/home" component={Lists} />
    <Route exact path="/home/new" component={CreateInventory}/>
    </Switch>
    </div>
  );
}

export default App;
