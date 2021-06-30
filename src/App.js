import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";
import HomePage from './HomePage.js';
import LoginPage from './LoginPage.js';
import SignupPage from './SignupPage.js';
import TodoListPage from "./TodoListPage.js";
import Header from "./Header.js";

// Params are placeholders in the URL that begin
// with a colon, like the `:id` param defined in
// the route in this example. A similar convention
// is used for matching dynamic segments in other
// popular web frameworks like Rails and Express.

export default class ParamsExample extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Switch>
            <Route 
              path="/" 
              exact
              render={(routerProps) => <HomePage {...routerProps} />} 
            />
            <Route 
              path="/signup" 
              exact
              render={(routerProps) => <SignupPage {...routerProps} />} 
            />
            <Route 
              path="/login" 
              exact
              render={(routerProps) => <LoginPage {...routerProps} />} 
            />
            <Route 
              path="/todos" 
              exact
              render={(routerProps) => <TodoListPage {...routerProps} />} 
            />           
          </Switch>
        </div>
      </Router>
    );
  }
}
