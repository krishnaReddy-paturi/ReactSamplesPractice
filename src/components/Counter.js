import React, { Component } from "react";

class Counter extends Component{

    constructor(props){
        super(props);
        this.state={
            count:0
        }
    }
    increment(){
    //     console.log(this.state.count)
    //     this.setState(
    //         {
    //         count: this.state.count+1
    //     },
    //     ()=>{console.log('call back fn.,',this.state.count)    
    //     }
    // )
    //     console.log(this.state.count)
    this.setState((prevState)=>({
        count:prevState.count+1
    })
    )
    }
    incrementFive(){
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()
    }
    render(){
        return(
            <div>
               count- {this.state.count}
               <button onClick={()=>this.incrementFive()}>IncrementFive</button>
            </div>
        
        )
    }
}
export default Counter;