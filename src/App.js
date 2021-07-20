import './App.css';
import InventoriesList from './components/InventoriesList';
import Item from './components/Item';

import { Route, Switch } from "react-router-dom";
import React from "react";

function App() {
  return (
    <div className="App">
    <Switch>
    <Route exact path="/home" component={InventoriesList} />
    <Route exact path="/home/:id" component={Item}/>
    </Switch>
    </div>
  );
}

export default App;
