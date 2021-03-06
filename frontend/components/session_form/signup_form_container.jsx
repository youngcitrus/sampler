import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { createNewUser, loginUser, clearErrors } from '../../actions/session_actions';
import SignupForm from './signup_form';

// where are errors being passed in?

const mapStateToProps = (props) => {
    return {
        errors: props.errors.session,
        formType: 'sign up'
    }
};

const mapDispatchToProps = dispatch => {
    return {
        clearErrors: ()=>dispatch(clearErrors()),
        processForm: (user) => dispatch(createNewUser(user)),
        demoLogin: () => dispatch(loginUser({username:'Justin', password:'password'}))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);