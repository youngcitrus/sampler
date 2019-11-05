import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, withRouter } from 'react-router-dom';

const mapStateToProps = state => ({
    loggedIn: Boolean(state.session.id)
});

// below function is defined with destructred props because it will use those args that will be passed when it is wrapped

const Auth = ({ loggedIn, path, component: Component }) => (
    <Route
    path={path} 
    render={props => (
        loggedIn ? <Redirect to="/" /> : <Component {...props} /> // thread and destructure extra props
    )}
    />
);

export const AuthRoute = withRouter(connect(mapStateToProps)(Auth));