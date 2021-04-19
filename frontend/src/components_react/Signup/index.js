import React, { Component } from 'react';
import { Link } from 'react-router-dom';
 
import * as ROUTES from '../../constants/routes';
 
const SignUpPage = () => (
  <div>
    <h1>SignUp</h1>
    <SignUpForm />
  </div>
);

const INITIAL_STATE = {
    username: '',
    email: '',
    passwordOne: '',
    passwordTwo: '',
    error: null,
  };
 
class SignUpForm extends Component {
  constructor(props) {
    super(props);

    this.state = {...INITIAL_STATE };
  }
 
  onSubmit = event => {
 
  }
 
  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
 
  render() {
      const { 
        username,
        email,
        passwordOne,
        passwordTwo,
        error, 
      } = this.state;
    return (
      <form onSubmit={this.onSubmit}>
 
      </form>
    );
  }
}
 
const SignUpLink = () => (
  <p>
    Don't have an account? <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
  </p>
);
 
export default SignUpPage;
 
export { SignUpForm, SignUpLink };
