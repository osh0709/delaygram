import React, { Component } from "react";
import Image from "react-graceful-image";
import Loading from "../components/Loading";
import {Link} from "react-router-dom";
import UserImages from "../containers/UserImages";


class Homepage extends Component {
  state = {
    loading: true,
  }

render(){
    let {users, loading} = this.props
    // console.log(users)
    return (

      <div className = "nextagram">

        {/* <h1>Nextagram</h1> */}

        {loading? <Loading load = {loading} />: null}
        
        <ul className = "profileUsers">
          {
            users.map((user,index) => (
                
              <li key = {index} className = "listProfileUsers">
                
                  <div className = "profiles">
                    <Link to = {`/users/${user.id}`}>
                      
                      <Image src = {user.profileImage} className = "rounded-circle" width = "150px" retry={{ count: 10, delay: 2 }} alt = ""/> 
                   
                    </Link>
                  </div>
                
                <div className = "userIds">
                    {user.id}
                </div>

                <div className = "usernames">
                {user.username}
                </div>

                <div className = "userImagesList">
                  <UserImages userId = {user.id}/>

                  {/* <UserProfilePage username = {user.username}/> */}
 
                </div>
  
              </li>

            ))
          }
        </ul>

      
      </div>
    )
  }
}

export default Homepage;