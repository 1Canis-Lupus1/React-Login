import React, { Component } from "react";
import FacebookLogin from "react-facebook-login";

export class Facebook extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userID: "",
      name: "",
      email: "",
      profilePic: "",
      isLoggedIn: false,
    };
  }

  responseFacebook = (response) => {
    console.log("My Response:", response);
    this.setState(
      {
        userID: response.userID,
        name: response.name,
        email: response.email,
        profilePic: response.picture.data.url,
        isLoggedIn: true,
      },
      () => {
        console.log("After Set State:", this.state);
      }
    );
  };

  componentClicked = () => {
    console.log("Login Clicked");
  };

  render() {
    let facebookContent;

    if (this.state.isLoggedIn) {
      facebookContent = (
        <div
          style={{
            width: "700px",
            margin: "auto",
            background: "lightgrey",
            padding: "10px",
          }}
        >
            <h2 style={{background:"lightcyan"}}>User Info</h2>
          <table style={{border:"4px solid black"}}>
            <thead>
              <th style={{border:"2px solid black",background:"lightgreen",padding:"5px"}}>Profile Picture </th>
              <th style={{border:"2px solid black",background:"yellow",padding:"5px"}}>User Name</th>
              <th style={{border:"2px solid black",background:"pink",padding:"5px"}}>Email</th>
            </thead>
            <tbody>
              <tr>
                <th style={{border:"2px solid black",padding:"5px"}}>
                  <img
                    src={this.state.profilePic}
                    alt={this.state.name}
                    height="90px"
                  />
                </th>
                <th style={{border:"2px solid black",padding:"5px"}}>{this.state.name}</th>
                <th style={{border:"2px solid black",padding:"5px"}}>{this.state.email}</th>
              </tr>
            </tbody>
          </table>
        </div>
      );
    } else {
      facebookContent = (
        <h1>
          <h3>Facebook</h3>
          <FacebookLogin
            appId="277328167017470"
            autoLoad={true}
            fields="name,email,picture"
            onClick={this.componentClicked}
            callback={this.responseFacebook}
          />
        </h1>
      );
    }

    return <div>{facebookContent}</div>;
  }
}

export default Facebook;
