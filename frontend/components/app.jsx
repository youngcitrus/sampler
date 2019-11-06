import React from "react";
// import GreetingContainer from "./greeting/greeting_container";
import { Route, Redirect, Switch, Link } from "react-router-dom";
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import { AuthRoute } from '../util/route_util';
import NavBar from './navbar';
import HomeContainer from './home/home_container';
import Footer from './footer';

const App = () => {
  debugger
return (
  <div>
    <header>
      <NavBar/>
    </header>
    <Switch>
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
      <Route path="/" component={HomeContainer}/>
      <Redirect to="/" />
    </Switch>
    <footer>
      <Footer/>
    </footer>
  </div>
  
)};

export default App;