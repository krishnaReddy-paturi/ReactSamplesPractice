import React, { Component } from "react";
import ForwardRefInput from "./ForwardRefInput";

class FRparentInput extends Component{
    constructor(props){
        super(props)
        this.inputRef=React.createRef()
    }

    clickHandler=()=>{
        this.inputRef.current.focus()
    }
    render(){
        return(
            <div>
<ForwardRefInput ref={this.inputRef}></ForwardRefInput>
<button onClick={this.clickHandler}>FR FocusInput</button>
            </div>
        )
    }
}
export default FRparentInput;