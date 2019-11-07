import React from 'react';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {
    
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
      <ul>
        {this.props.errors.responseJSON.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    const demoUser = (
      <div className='demo-user-button-container'>
        <button className='demo-user-button' onClick={this.handleDemoLogin}>Login as Demo User</button>
      </div>
    )

    const message = (
      <div className='login-message-container'>
        <div className='login-message'>Don't have an account yet? <Link to='/signup' className='login-message-link'>Sign Up Now</Link></div>
      </div>
    )

    return (
        <div className='session-page'>
          <div className='form-icon-container'><img src="Sampler_Icon_Main_Cutout.png" id='form-icon'/></div>
          <div className='session-form'>
              <br/>
              {this.renderErrors()} <br/>
              <form onSubmit={this.handleSubmit}>
                <div className='session-form-items'>  
                  
                      <input type="text"
                              value={this.state.username}
                              onChange={this.update('username')}
                              placeholder='Username'
                              className='session-input'              
                      />                    
                  <br/>                 
                      <input type="password"
                              value={this.state.password}
                              onChange={this.update('password')}
                              placeholder='Password'
                              className='session-input'
                      />
                  <br/>
                  <input type="submit" className='login-submit session-input' value='Log in'/>
                  {demoUser}
                  <br/>
                  <div>{message}</div>
                </div>
              </form>
          </div>
        </div>
    );
  }
}
  

export default SessionForm;