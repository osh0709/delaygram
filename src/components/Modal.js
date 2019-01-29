import React, { Component } from "react";
import SignIn from "./Login";
import SignUp from "./Signup";


class ShowModal extends Component {

  state = {
    login: true,
    signup: true,

  }

  loginToggle = () => {
    this.setState({
      login: !this.state.login,
    
    })
  }

  signupToggle = () => {
    this.setState ({
      signup: !this.state.signup,
    })
  }


  render(){

    let {toggle, showModal, closeModal} = this.props;
    let {login, signup} = this.state;

    return (

        <div>

          {this.state.login ? <SignIn login = {login} loginToggle={this.loginToggle} showModal = {showModal} toggle = {toggle} closeModal = {closeModal} /> : <SignUp signup = {signup} signupToggle = {this.signupToggle} loginToggle={this.loginToggle} showModal = {showModal} toggle = {toggle}/> }

      </div>
    )
  }
}

export default ShowModal;