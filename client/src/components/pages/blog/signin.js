import React, { Component } from 'react';
import { Link } from "react-router-dom";
var axios = require("axios");


class SignIn extends Component {

    // from signin tutorial
    constructor(props) {
        super(props);
        this.signIn = this.signIn.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.state = {
          email:'',
          password:''
        };
      }
      signIn(){
        alert('Email address is ' + this.state.email + ' Password is ' + this.state.password);  
        axios.post('/signin', {
          email: this.state.email,
          password: this.state.password
        })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
      }
      handleEmailChange(e){
        this.setState({email:e.target.value})
      }
      handlePasswordChange(e){
        this.setState({password:e.target.value})
      }

    //   end of tutorial
  render() {
    return (
        <div className="signin-form">

            <h1>Sign In</h1>
                <form>
                    <div className="form-group">
                        <label className="exampleInputEmail1">Email address</label>
                        <input type="email" onChange={this.handleEmailChange} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" required />
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group">
                        <label className="exampleInputPassword1">Password</label>
                        <input type="password" onChange={this.handlePasswordChange} className="form-control" id="exampleInputPassword1" placeholder="Password" required />
                    </div>
                    <button type="submit" className="btn btn-secondary" onClick={this.signIn}>Submit</button>
                    </form>
                    <br></br>
                    <h6><Link to="SignUp">Sign Up</Link></h6>
    </div>
    );
   }
  }

export default SignIn;