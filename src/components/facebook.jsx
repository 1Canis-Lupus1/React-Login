import React, { Component } from 'react'
import FacebookLogin from 'react-facebook-login'

export class Facebook extends Component {
    constructor(props){
        super(props)
        this.state={
            userID:"",
            name:"",
            email:"",
            profilePic:"",
            isLoggedIn:false
        }
    }

    responseFacebook=(response)=>{
        console.log("My Response:",response)
    }

    componentClicked=()=>{
        console.log("Login Clicked")
    }

    render() {
        let facebookContent

        if(this.state.isLoggedIn){
            facebookContent=null
        }else{
            facebookContent=(
                <FacebookLogin
                    appId="277328167017470"
                    autoLoad={true}
                    fields="name,email,picture"
                    onClick={this.componentClicked}
                    callback={this.responseFacebook} 
                />
            )
        }

        return (
            <div>
                {facebookContent}
            </div>
        )
    }
}

export default Facebook
