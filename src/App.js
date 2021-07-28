import "./App.css";
import Inventories from "./components/MyInventories";
import CreateInventory from "./components/NewInventory";
import Inventory from "./components/Inventory";
import EditInventory from "./components/EditInventory";
import ItemSpecs from "./components/AddSpecs";
import Home from "./components/Home";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Navbar from "./components/NavBar";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { Route, Switch } from "react-router-dom";
import { loggedIn } from "./api";
import React from "react";

class App extends React.Component {
  state = {
    loggedInUser: null,
  };

  setLoggedInUser = (user) => {
    this.setState({
      loggedInUser: user,
    });
  };
  //In case the page is refreshed I check if there's
  //an active session on the backend
  async componentDidMount() {
    const response = await loggedIn();
    if (!this.state.loggedInUser) {
      if (response.data._id) {
        this.setLoggedInUser(response.data);
      }
    }
  }
  render() {
    return (
      <div className="App">
        <ToastContainer />
        <div className="Directory">
          <Navbar
            loggedInUser={this.state.loggedInUser}
            setLoggedInUser={this.setLoggedInUser}
          />
        </div>

        <Switch>
          <div>
            <Route exact path="/" component={Home} />
            <Route exact path="/myinventories" component={Inventories} />
            <Route exact path="/newinventory" component={CreateInventory} />

            <Route exact path="/myinventories/:invId" component={Inventory} />
            <Route
              exact
              path="/myinventories/edittitle"
              component={EditInventory}
            />
            <Route
              exact
              path="/myinventories/:invId/additemspecs/:itemId"
              component={ItemSpecs}
            />
            <Route exact path="/signup" component={Signup} />
            <Route
              exact
              path="/login"
              render={(props) => {
                return (
                  <Login {...props} setLoggedInUser={this.setLoggedInUser} />
                );
              }}
            />
          </div>
        </Switch>
      </div>
    );
  }
}
export default App;
