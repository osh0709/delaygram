import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";
import Image from "react-graceful-image";
import Loading from "../components/Loading.js"

class UserImages extends React.Component {
  state = {
    usersImages: [],
    loading: true,

  }

  componentDidMount = () => {
    this.mounted = true;
    let { userId } = this.props
    axios({
      method: "get",
      url: `https://insta.nextacademy.com/api/v1/images?userId=${userId}`,

    })

      .then(result => {
        if (this.mounted) {
          this.setState({
            usersImages: result.data,
            loading: false
          })
        }
      })
  }

  componentWillUnmount = () => {
    this.mounted = false;
  }

  render() {
    let { usersImages, loading } = this.state
    return (
      <div className="nextagram">

        {loading ? <Loading /> : null}

        <div className="userImagesGrids">
          {
            usersImages.map((image, index) => (

              <div className="userImagesGrids" key={index}>

                <ul className = "imagesLists">

                  <li className = "userImages">

                    <Image src={image} className="userImages" height="90px" retry={{ count: 10, delay: 2 }} alt="" />

                  </li>
                  
                </ul>

              </div>

            ))
          }
        </div>

      </div>
    )
  }
}

export default UserImages;