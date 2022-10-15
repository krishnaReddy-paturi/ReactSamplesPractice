import React, { Component } from "react";

class EventBind extends Component{
    constructor(props){
         super(props)

         this.state={
            msg:'hi'
         }
         this.clickHandler=this.clickHandler.bind(this);
    }
    // clickHandler(){
    //     this.setState({
    //         msg:'bye'
    // })
    //     console.log(this)
    // }
    clickHandler=()=>{
        this.setState({
            msg:'good bye'
        })
    }
    render(){
        return(
            <div>
                <h3>{this.state.msg}</h3>
                
                {/*  tyes of event bindigs
                <button onClick={this.clickHandler.bind(this)}>hit it</button> */}
                {/* <button onClick={()=>this.clickHandler()}>hit it</button> */}
                <button onClick={this.clickHandler}>clickIT</button>
            </div>
        )
    }
}

export default EventBind;