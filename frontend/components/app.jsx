import React from "react";
// import GreetingContainer from "./greeting/greeting_container";
import { Route, Redirect, Switch, Link } from "react-router-dom";
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import { AuthRoute } from '../util/route_util';
import NavBar from './navbar';
import Home from './home/home'


const App = () => (
  <div>
    <header>
      <NavBar/>
    </header>
    <Switch>
      <Route exact path="/" component={Home}/>
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
      <Redirect to="/" />
    </Switch>
  </div>
  
);

export default App;