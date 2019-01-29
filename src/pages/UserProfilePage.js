import React from "react";
import UserImages from "../containers/UserImages";
import Loading from "../components/Loading";
// import Homepage from "../pages/Homepage";
import Image from "react-graceful-image";


class UserProfilePage extends React.Component {

  // eachUsers = (props) => {

      // let {users} = this.props
      // let users = users.find((user) => (
      //   user.id == this.props.match.params.id))

      //   let userId = this.props.match.params.id;
        
  //   let usersList= props.users;
  //   let userId = this.props.match.params.id;
  //   let usersInfo = usersList.find = (usersInfo) => {
  //     user.id == userId }
  //   );

  //   let profileImage = this.props.match.params.profileImage;
  //   let username = this.props.match.params.username;

  //   let { user, profileImage, username } = usersInfo

  // }



  render() {

      //     let {users} = this.props
      // let users = users.find((user) => (
      //   user.id == this.props.match.params.id))

      //   let userId = this.props.match.params.id;

    let userId = this.props.match.params.id;
    let {loading} = this.props;
    
    // let { user, profileImage, username } = this.state
    
    return (
      <div>

         {loading? <Loading/> : null}

         <div className = "profileUsername">
          
          <h1>Hi, I'm </h1>

         </div>

         {/* <div className = "profilePicture">

         <Image src = {profileImage} className = "rounded-circle" width = "150px" retry={{ count: 10, delay: 2 }} alt = ""/>

         </div> */}

         <div className = "allImages">
           {
            <div className = "userImagesList">

                <UserImages userId = {userId} className = "userImagesAll" retry={{ count: 10, delay: 2 }} alt = ""/>

            </div>
          }
        </div>

      
      </div>

    )
  }
}

export default UserProfilePage