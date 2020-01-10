import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./layout/Header";
import "../../node_modules/materialize-css/dist/css/materialize.min.css";
import M from "../../node_modules/materialize-css/dist/js/materialize.min.js";
import "../App.css";
import List from "./List";
import UserDetails from "./UserDetails";
class App extends React.Component {
  componentDidMount() {
    M.AutoInit();
  }

  render() {
    return (
      <div>
        <Router>
          <Header />
          <div className="container">
            <Route path="/" exact component={List} />
            <Route path="/users/:user" exact component={UserDetails} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
