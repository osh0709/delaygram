import React from "react";
import {Link} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import { Nav } from "reactstrap";
import ShowModal from "../components/Modal";

class Navbar extends React.Component {

  state = {
    showModal : false,

  }

  toggle = () => {

    this.setState({
      showModal : !this.state.showModal,

    })
  }

  closeModal = () => {

    this.setState({
      showModal : false,

    })
  }

  logout = (e) => {

      e.preventDefault();
      localStorage.removeItem("jwt");
      this.forceUpdate()

  }


  render(){

    return (

      <div className = "bar">

        {this.state.showModal ? <ShowModal toggle = {this.toggle} showModal= {this.state.showModal} closeModal = {this.closeModal}/> : null }

          <h1 className = "navBarTitle" >Nextagram</h1>

            <Nav className = "barLinks">

              <Link to= "/" className = "links" > Home </Link> 

              <Link to= "/users/1" className = "links" > My Profile </Link>

              {
                localStorage.getItem("jwt") ?
                <Link to = "/" onClick = {this.logout} className = "links"> Log Out </Link> : 
                <Link to = "/" onClick = {this.toggle} className = "links" > Log In / Sign Up </Link>
              }
              
            </Nav>

              <hr/>
            
      </div>

    )
  }
}

export default Navbar;