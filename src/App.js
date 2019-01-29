import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";
import "./App.css";
import Router from "./Router";
import NavBar from "./components/NavBar";
// import Homepage from "./pages/Homepage.js";
// import {Link} from "react-router-dom";


class App extends React.Component {
  state = {
    users: [],
    loading: true,

  }

  componentDidMount = () => {
    axios({
      method: "get",
      url: "https://insta.nextacademy.com/api/v1/users/",
    })

    .then(result => {
      this.setState({
        users: result.data,
        loading: false,
      })
    })

    .catch(error => {
      console.log("Sorry", error)
    })
  }

  render(){
    let { users, loading } = this.state
    return (
<>
      <div className = "bar" >
        <div className = "navBar">

          <NavBar/>

        </div>
      
      
      </div>
        <Router users = {users} loading = {loading}/>
     </>
    )
  }
}

export default App;
