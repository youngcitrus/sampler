import React from "react";
// import GreetingContainer from "./greeting/greeting_container";
import { Route, Redirect, Switch, Link } from "react-router-dom";
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import GreetingContainer from "./greeting/greeting_container";
import PackShowContainer from "./packs/pack_show_container";
import NavBarContainer from "./navbar_container";
import LikedSamplesContainer from './liked_samples_container';

const App = () => {
return (
  <div>
    <Switch>
      <Route path="/packs/:packId" component={PackShowContainer}/>
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
      <Route exact path="/" component={GreetingContainer}/>
      <Route exact path ="/favorites" component={LikedSamplesContainer} />
      <Redirect to="/" />
    </Switch>
  </div>
  
)};

export default App;