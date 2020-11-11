import React, { Component } from "react";
import GoogleLogin from "react-google-login";

export class Google extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userID: "",
      name: "",
      email: "",
      profilePicture: "",
      isLoggedIn: false,
    };
  }

  responseGoogle = (response) => {
    console.log("Google response:", response);
    this.setState(
      {
        userID: response.googleId,
        name: response.profileObj.name,
        email: response.profileObj.email,
        profilePicture: response.profileObj.imageUrl,
        isLoggedIn: true,
      },
      () => {
        console.log("After Set State Google:", this.state);
      }
    );
  };

  render() {
    let GoogleContent;

    if (this.state.isLoggedIn) {
      GoogleContent = (
        <div style={{
                    width:"700px",
                    margin:"auto",
                    background:"lightgrey",
                    padding:"10px",
                }}>
                    <img src={this.state.profilePicture} alt={this.state.name} height="90px"/>
                    <h2>Welcome {this.state.name}</h2>
                    <h3>Email: {this.state.email}</h3>
                </div>
      );
    } else {
      GoogleContent = (
        <>
        <h3>Google</h3>
          <GoogleLogin
            clientId="960447938397-vg902lh4c36fikdo1684bigdiq2l67ct.apps.googleusercontent.com"
            buttonText="LOGIN WITH GOOGLE"
            onSuccess={this.responseGoogle}
            onFailure={this.responseGoogle}
            cookiePolicy={"single_host_origin"}
          />
        </>
      );
    }
    return (
      <div>
        <h1>{GoogleContent}</h1>
      </div>
    );
  }
}

export default Google;
