import React, { Component } from "react";

class ClassClick extends Component{
    userClicks(){
        console.log('clcked me!')
    }
    render(){
        return(
            <button onClick={this.userClicks}>clickme</button>
        )
    }
}

export default ClassClick;