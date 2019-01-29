import React from 'react';
import axios from "axios";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from 'reactstrap';

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      // localStorage.setItems("jwt")

    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value

    });
  }

  handleSubmit = (event) => {

    event.preventDefault();
    
    let {closeModal} = this.props;

    axios({
      method: "POST",
      url: "https://insta.nextacademy.com/api/v1/login",
      data: {
        email: this.state.email,
        password: this.state.password

      }
    })

      .then(response => {
        console.log(response);
        // console.log(response.data.auth_token);
        localStorage.setItem( "jwt", response.data.auth_token);
        alert("Welcome Back!");
        closeModal();
      
      })

      .catch(error => {
        console.log(error);
        alert("Sorry, something went wrong :(")
      })

  }

  validateEmail = (email) => {
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(this.state.email).toLowerCase());
  }

  render() {

    let { toggle, login, loginToggle } = this.props;

    return (
      
      <div>

        <Modal isOpen={login} toggle={toggle} className={this.props.className}>

          <ModalHeader toggle={toggle}>Login to explore!</ModalHeader>

            <ModalBody>

              <Form id = "signin-form" onSubmit={this.handleSubmit}>

                <FormGroup>
                  <Label for="email"></Label>
                  <Input type={this.state.value} name="email" id="loginUser" placeholder="Email Address" onChange={this.handleChange} />

                  <Label for="password"></Label>
                  <Input type="password" name="password" id="password" placeholder="Password" onChange={this.handleChange} />
                </FormGroup>

              </Form>

            </ModalBody>

              <ModalFooter>

                <input form = "signin-form" className = "btn btn-primary" onClick={this.handleSubmit} disabled={this.state.email && this.state.password && this.validateEmail ? false : true} type="submit" value="Log In" />{' '}

                <Button color="secondary" onClick={loginToggle}>Sign up</Button>

                <Button color="danger" onClick={toggle}>Cancel</Button>

              </ModalFooter>
          
           </Modal>

        
      </div>

    )

  }
}

export default SignIn;