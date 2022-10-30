import React, { Component } from "react";

class ClassRefInput extends Component{
    constructor(props){
        super(props)
        this.inpuRef=React.createRef()
    }
    focusInput(){
        this.inpuRef.current.focus()
    }
    render(){
        return(
            <div>
                <input type="text" ref={this.inpuRef}></input>
            </div>
        )
    }
}
export default ClassRefInput;