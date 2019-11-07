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
        e.preventDefault();
        const demoButton = document.getElementById("demo-button");
        const signupButton = document.getElementById("signup-button");
        const loginLink = document.getElementById("login-link");
        demoButton.setAttribute("disabled", "disabled");
        signupButton.setAttribute("disabled", "disabled");
        loginLink.classList.add("disable-link");

        const inputs = document.getElementsByClassName('signup-input');
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
          let email = 'justinhaison@gmail.com'.split("");
          let password = 'password'.split("");
          
          typeChar(user, 'username');
          setTimeout(()=>typeChar(email, 'email'), 200);
          setTimeout(()=>typeChar(password, 'password'), 900);
        }
        
        this.setState({username: "", password: ""}, autoFill);
        setTimeout(()=>this.props.demoLogin(), 1200);
        
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
                <div id='login-link' className='signup-message'>Already a member? <Link to='/login' className='signup-message-link'>Log in</Link></div>
            </div>
        )

        const demoUser = (
            <div className='demo-user-button-container'>
              <button id='demo-button' className='demo-user-button' onClick={this.handleDemoLogin}>Sign up as Demo User</button>
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
                    <input type="submit" id='signup-button' className='signup-submit' value='Sign up'/>
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