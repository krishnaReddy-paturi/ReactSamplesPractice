import React, { Component } from "react";
import MemoComponent from "./MemoComponent";
import PureClassComponent from "./PureClassComponent";
import RegularClassComponent from "./RegularClassComponent";

class ParentClassComponent extends Component{
    constructor(props){
        super(props)
        this.state={
            name:'allstate'
        }
    }
    componentDidMount(){
        setInterval(()=>{
            this.setState({
                name:'krishna allstate'
            })
        },3000)
    }
    render(){
        return(
            <div>
            parent component
            {/* <RegularClassComponent name={this.state.name}></RegularClassComponent>
            <PureClassComponent name={this.state.name}></PureClassComponent> */}
            <MemoComponent name={this.state.name}></MemoComponent>
            </div>
        )
    }
}
export default ParentClassComponent;