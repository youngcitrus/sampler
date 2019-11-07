import React from 'react';
import { Link } from 'react-router-dom';

class SignupForm extends React.Component {
    
    constructor(props) {
      super(props);
      this.state = {
        username: "",
        email: "",
        password: ""
      };
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleDemoLogin = this.handleDemoLogin.bind(this);
    }
    
    componentWillUnmount(){
      this.props.clearErrors();
    }

    update(field) {
        return e => this.setState({
          [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
    }

    handleDemoLogin(e) {
      this.props.demoLogin();
    }

    renderErrors() {
        if (this.props.errors.length === 0) return null;
        return(
          <div className='signup-errors'>
            {this.props.errors.responseJSON.map((error, i) => (
              <p className='error' key={`error-${i}`}>
                {error}
              </p>
            ))}
          </div>
        );
    }

    render() {

        const message = (
            <div className='signup-message-container'>
                <div className='signup-message'>Already a member? <Link to='/login' className='signup-message-link'>Log in</Link></div>
            </div>
        )

        const demoUser = (
            <div className='demo-user-button-container'>
              <button className='demo-user-button' onClick={this.handleDemoLogin}>Login as Demo User</button>
            </div>
        )

      

      return (
          <div className='signup-page'>
            <div className='form-icon-container'><img src="Sampler_Icon_Main_Cutout.png" id='form-icon'/></div>
            {this.renderErrors()} <br/>
            <div className='signup-form'>
                <br/>
                <form onSubmit={this.handleSubmit}>
                    <div className='signup-form-items'>  
                   
                        <input type="text"
                                value={this.state.username}
                                onChange={this.update('username')}
                                placeholder='Username'
                                className='signup-input'
                        
                        />
                    
                    <br/>
                    
                        <input type="text"
                                value={this.state.email}
                                onChange={this.update('email')}
                                placeholder='Email'
                                className='signup-input'
                            />
                    <br/>
                    
                        <input type="password"
                                value={this.state.password}
                                onChange={this.update('password')}
                                placeholder='Password'
                                className='signup-input'
                        />
                    <br/>
                    <input type="submit" className='signup-submit' value='Sign up'/>
                    {demoUser}<br/>
                    <div>{message}</div>
                  </div>
                </form>
                
            </div>
          </div>
      );
    }

}
  

export default SignupForm;