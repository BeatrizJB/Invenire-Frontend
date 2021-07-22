import "./App.css";
import Lists from "./components/MyInventories";
import CreateInventory from "./components/CreateInventory";
import Home from "./components/Home";
import Signup from "./components/Signup";
import Login from "./components/Login";
import { Route, Switch } from "react-router-dom";
import React from "react";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/list" component={Lists} />
        <Route exact path="/list/new" component={CreateInventory} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/login" component={Login} />
      </Switch>
    </div>
  );
}

export default App;
