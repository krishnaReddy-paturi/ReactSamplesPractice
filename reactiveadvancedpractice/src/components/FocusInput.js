import React, { Component } from "react";
import ClassRefInput from "./ClassRefInput";

class FocusInput extends Component{
    constructor(props){
        super(props)
        this.componentRef=React.createRef()
    }
    clickHandler=()=>{
        this.componentRef.current.focusInput()
    }
    render(){
        return(
<div>
    <ClassRefInput ref={this.componentRef}></ClassRefInput>
    <button onClick={this.clickHandler}>FocusInput</button>
</div>
        )
    }
}
export default FocusInput;