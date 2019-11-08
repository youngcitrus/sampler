import React from 'react';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {
    
  constructor(props) {
    super(props);
    this.state = {
      username: "",
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
    e.preventDefault();
    const demoButton = document.getElementById("demo-button");
    const loginButton = document.getElementById("login-button");
    const signupLink = document.getElementById("signup-link");
    demoButton.setAttribute("disabled", "disabled");
    loginButton.setAttribute("disabled", "disabled");
    signupLink.classList.add("disable-link");

    const inputs = document.getElementsByClassName('session-input');
    Array.from(inputs).forEach(input=>{
      input.setAttribute("disabled", "disabled");
    });

    const autoFill = () => {
      const typeChar = (input, field) => {
          if (input.length > 0){
              let char = input.shift();
              this.setState(({[field]: this.state[field] + char}),
                  () => setTimeout(()=> typeChar(input, field), 25))
          }
      }
      let user = 'Justin'.split("");
      let password = 'password'.split("");
      
      typeChar(user, 'username');
      setTimeout(()=>typeChar(password, 'password'), 300);
    }

    this.setState({username: "", password: ""}, autoFill);
    setTimeout(()=>this.props.demoLogin(), 500);
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
    const demoUser = (
      <div className='demo-user-button-container'>
        <button id='demo-button' className='demo-user-button' onClick={this.handleDemoLogin}>Login as Demo User</button>
      </div>
    )

    const message = (
      <div className='login-message-container'>
        <div className='login-message' id='signup-link'>Don't have an account yet? <Link to='/signup' className='login-message-link'>Sign Up Now</Link></div>
      </div>
    )

    return (
        <div className='session-page'>
          <div className='form-icon-container'><img src="Sampler_Icon_Main_Cutout.png" id='form-icon'/></div>
          {this.renderErrors()} <br/>
          <div className='session-form'>
              <br/>
              <form onSubmit={this.handleSubmit}>
                <div className='session-form-items'>  
                  
                      <input type="text"
                              value={this.state.username}
                              onChange={this.update('username')}
                              placeholder='Username or Email'
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
                  <input type="submit" id='login-button' className='login-submit session-input' value='Log in'/>
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