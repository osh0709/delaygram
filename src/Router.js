import {Route, Switch} from "react-router-dom";
import React, { Component } from "react";
import Homepage from "./pages/Homepage";
import UserProfilePage from "./pages/UserProfilePage";


export default class Router extends Component {

    render(){
    return(
        <Switch>
             <Route exact path = "/" component = {props => < Homepage users={this.props.users} loading={this.props.loading} {...props}/> } 
             />

             <Route path = "/users/:id" component = {props => < UserProfilePage {...props}/> }
             /> 
        </Switch>
        );
    }
}