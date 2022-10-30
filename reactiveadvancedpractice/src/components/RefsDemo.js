import React, { Component } from "react";

class RefsDemo extends Component{
    constructor(props){
        super(props)
this.inputRef=React.createRef()
this.cbRef=null
this.setCbRef=(ele)=>{
    this.cbRef=ele
}
    }
    componentDidMount(){
        // this.inputRef.current.focus()
        // console.log(this.inputRef)
        if(this.cbRef){
this.cbRef.focus()
        }
    }
    clickHandler=()=>{
      // alert(this.inputRef.current.value)
      alert(this.cbRef.value)
    }
    render(){
        return(
            <div>
<input type="text" ref={this.inputRef}></input>
<input type="text" ref={this.setCbRef}></input>
<button onClick={this.clickHandler}>click</button>
            </div>
        )
    }
}
export default RefsDemo;