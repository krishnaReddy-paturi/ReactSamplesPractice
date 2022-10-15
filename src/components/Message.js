import React, { Component } from "react";

class Message extends Component{
    constructor(){
        super();
        this.state={
            message:'hello myaan!!'
        }
    }

    changeMessage(){
        this.setState({
            message: 'Am present after susbscribe'
        })
            
    }
    render(){
        return(
            <div>

                            <h1>Hello  banglore!!    {this.state.message}</h1>
<button onClick={()=>this.changeMessage()}><h1>SUBSCRIBe</h1></button>
            </div>
        )
    }
}
export default Message;