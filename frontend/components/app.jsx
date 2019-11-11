import React from "react";
// import GreetingContainer from "./greeting/greeting_container";
import { Route, Redirect, Switch, Link } from "react-router-dom";
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import { AuthRoute } from '../util/route_util';
import GreetingContainer from "./greeting/greeting_container";
import TwoSamples from './sample_container';

const App = () => {
return (
  <div>
    <Switch>
      <Route exact path="/test" component={TwoSamples}/>
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
      <Route exact path="/" component={GreetingContainer}/>
      <Redirect to="/" />
    </Switch>
  </div>
  
)};

export default App;