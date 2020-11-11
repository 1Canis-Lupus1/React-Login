import React, { Component } from 'react'
import GoogleLogin from 'react-google-login'

export class Google extends Component {
    constructor(props){
        super(props)
        this.state={
            userID:"",
            name:"",
            email:"",
            profilePicture:"",
            isLoggedIn:false
        }
    }

    responseGoogle=(response)=>{
        console.log("Google response:",response)
    }

    render() {
        let GoogleContent=(
            <GoogleLogin
                clientId="960447938397-vg902lh4c36fikdo1684bigdiq2l67ct.apps.googleusercontent.com"
                buttonText="Login"
                onSuccess={this.responseGoogle}
                onFailure={this.responseGoogle}
                cookiePolicy={'single_host_origin'}
            />
        )
        return (
            <div>
                <h2>Authneticate with Google to get Started</h2>
                <h1>{GoogleContent}</h1>
            </div>
        )
    }
}

export default Google
