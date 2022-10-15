import React from "react";
import { Component } from "react";
class UserGreeting extends Component{
    constructor(){
        super()
        this.state={
            isLoggedIn:false
        }
    }
    render(){
        // if(this.state.isLoggedIn){
        //     return <h3>welcome main greetig jogger!</h3>
        // }else{
        //     return <h2>welcome krishna</h2>
        // }

        // let mesage
        // if(this.state.isLoggedIn){
        //     mesage= <h3>welcome main greetig jogger!asdfvgb</h3>
        // }else{
        //     mesage= <h2>welcome krishna</h2>
        // }
        // return mesage

    //    return (this.state.isLoggedIn? <h2>welcome krishna</h2>: <h3>welome guest</h3>)

    return(this.state.isLoggedIn && <h1>welcome krishna</h1>)
        // return(
        //     <div>
        //         <h3>welcome main greetig jogger!asdfvgb</h3>
        //         <h2>welcome krishna</h2>
        //     </div>
            
        // )
    }
}

export default UserGreeting;