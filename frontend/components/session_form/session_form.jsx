import React from 'react';

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
      
      let emailInput = null;
      if (this.props.formType === 'sign up'){
        emailInput = (
          <div>
            <label>Email:<br/>
              <input type="text"
                     value={this.state.email}
                     onChange={this.update('email')}
                  />
            </label>
          </div>
        )
      }

      let demoUser = null;
      if (this.props.formType === 'login'){
        demoUser = (
          <div>
            <button type='button' onClick={this.handleDemoLogin}>Login as Demo User</button>
          </div>
        )
      }

      return (
          <div>
              Welcome to Sampler!
              Please {this.props.formType} or {this.props.navLink} <br/>
              {this.renderErrors()} <br/>
              <form onSubmit={this.handleSubmit}>
                  <label>Username:<br/>
                      <input type="text"
                              value={this.state.username}
                              onChange={this.update('username')}
                      />
                  </label>
                  <br/>
                  {emailInput}
                  <label>Password:<br/>
                      <input type="password"
                              value={this.state.password}
                              onChange={this.update('password')}
                      />
                  </label>
                  <input type="submit" value={this.props.formType}/>
                  {demoUser}
              </form>

          </div>
      );
    }

}
  

export default SessionForm;