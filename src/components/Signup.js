import React from 'react';
import { Link } from "react-router-dom";
import axios from "axios";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from 'reactstrap';

class SignUp extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      email: "",
      username: "",
      password: "",

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
      url: "https://insta.nextacademy.com/api/v1/users/new",
      data: {
        email: this.state.email,
        username: this.state.username,
        password: this.state.password,

      }
    })

      .then(response => {
        // console.log(response);
        localStorage.setItem( "jwt", response.data.auth_token);
        alert("Welcome to the party! Please proceed to login.");
        closeModal();
      
      })

      .catch(error => {
        // console.log(error);
        alert("Sorry, something went wrong :(")

      })
      

  }

  validateEmail = (email) => {
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(this.state.email).toLowerCase());
  }

  render() {

    let { toggle, signup, loginToggle, signupToggle } = this.props;

    return (

      <div>
        <Modal isOpen={signup} toggle={toggle} className={this.props.className}>

          <ModalHeader toggle={toggle} >Sign up and join the party!</ModalHeader>

          <ModalBody>

            <Form id="signup-form" onSubmit={this.handleSubmit}>

              <FormGroup>
                <Label for="email"></Label>
                <Input type={this.state.value} name="email" id="emailAdd" placeholder="Email Address" onChange={this.handleChange} />

                <Label for="username"></Label>
                <Input type={this.state.value} name="username" id="usernameNew" placeholder="Username" onChange={this.handleChange} />

                <Label for="password"></Label>
                <Input type="password" name="password" id="passwordNew" placeholder="Password" onChange={this.handleChange} />
              </FormGroup>

              <p>By signing up, you agree to our Terms , Data Policy and Cookies Policy.</p>
              <p>Already have an account? <Link to="/" onClick={loginToggle}>Login here!</Link></p>


            </Form>

          </ModalBody>

          <ModalFooter>

            <input form="signup-form" className="btn btn-primary" onClick={signupToggle} disabled={this.state.email && this.state.username && this.state.password && this.validateEmail ? false : true} type="submit" value="Let's Go!"/>{' '}

            <Button color="danger" onClick={toggle}>No, thanks</Button>

          </ModalFooter>

        </Modal>

      </div>

    )
  }
}

export default SignUp;