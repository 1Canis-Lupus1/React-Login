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
        this.setState({
            userID:response.userID,
            name:response.name,
            email:response.email,
            profilePic:response.picture.data.url,
            isLoggedIn:true
        },()=>{
            console.log("After Set State:",this.state)
        })
    }

    componentClicked=()=>{
        console.log("Login Clicked")
    }

    render() {
        let facebookContent

        if(this.state.isLoggedIn){
            facebookContent=(
                <div style={{
                    width:"400px",
                    margin:"auto",
                    background:"lightgrey",
                    padding:"20px",
                    marginTop:"40px"
                }}>
                    <img src={this.state.profilePic} alt={this.state.name} height="90px"/>
                    <h2>Welcome {this.state.name}</h2>
                    <h3>Email: {this.state.email}</h3>
                </div>
            )
        }else{
            facebookContent=(
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
