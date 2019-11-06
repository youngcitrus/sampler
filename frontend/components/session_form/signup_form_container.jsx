import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { createNewUser, clearErrors } from '../../actions/session_actions';
import SessionForm from './session_form';

// where are errors being passed in?

const mapStateToProps = (props) => {
    return {
        errors: props.errors.session,
        formType: 'sign up',
        navLink: <Link to="/login" onClick={()=>dispatch(clearErrors())}>login instead</Link>,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        processForm: (user) => dispatch(createNewUser(user))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);