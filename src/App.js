import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  // useParams
} from "react-router-dom";
import HomePage from './HomePage.js';
import LoginPage from './LoginPage.js';
import SignupPage from './SignupPage.js';
import TodoListPage from "./TodoListPage.js";
import Header from "./Header.js";
import './App.css'

// BONUS TOOLS
const TOKEN = 'TOKEN'

export default class App extends Component {
  state = {
    token: localStorage.getItem(TOKEN)
  }

  handleLogin = (userToken) => {
    this.setState({ token: userToken })
    localStorage.setItem(TOKEN, userToken)
  }

  handleLogout = () => {
    this.setState({ token: '' })
    localStorage.setItem(TOKEN, '')
  }

  render() {
    return (
      <Router>
        <div className='App'>
          <Header event={this.handleLogout} />
          <Switch>
            <Route 
              path="/" 
              exact
              render={(routerProps) => <HomePage {...routerProps} />} 
            />
            <Route 
              path="/signup" 
              exact
              render={(routerProps) => <SignupPage event={this.handleLogin} {...routerProps} />} 
            />
            <Route 
              path="/login" 
              exact
              render={(routerProps) => <LoginPage event={this.handleLogin} {...routerProps} />} 
            />
            <Route 
              path="/todos" 
              exact
              render={(routerProps) =>
                this.state.token
                  ? <TodoListPage token={this.state.token} {...routerProps} />
                  : <Redirect to='/' />} 
            />           
          </Switch>
        </div>
      </Router>
    );
  }
}
