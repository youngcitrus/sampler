import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { loginUser, clearErrors } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = ({errors}) => {
    return {
        errors: errors.session,
        formType: 'login'
    }
}

const mapDispatchToProps = dispatch => {
    return {
        clearErrors: ()=>dispatch(clearErrors()),
        processForm: (user) => dispatch(loginUser(user)),
        demoLogin: () => dispatch(loginUser({username:'DemoUser', password:'123456'}))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm)