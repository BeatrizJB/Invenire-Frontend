import "./App.css";
import Inventories from "./components/MyInventories";
import CreateInventory from "./components/NewInventory";
import Home from "./components/Home";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Navbar from "./components/NavBar";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { Route, Switch } from "react-router-dom";
import { loggedIn } from "./api";
import React from "react";

// function App() {
//   return (
//     <div className="App">
//       <Switch>

//         <Route exact path="/signup" component={Signup} />
//         <Route exact path="/login" component={Login} />
//       </Switch>
//     </div>
//   );
// }

// export default App;

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
          {/* <Route exact path={["/", "/projects"]} component={ListProjects} />
          <PrivateRoute exact path="/projects/add" component={AddProject} />
          <Route exact path="/projects/:id" component={ProjectDetails} />
          <PrivateRoute
            exact
            path="/projects/:id/edit"
            component={UpdateProject}
          /> */}
          <div >
            <Route exact path="/" component={Home} />
            <Route exact path="/myinventories" component={Inventories} />
            <Route exact path="/list/new" component={CreateInventory} />
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

