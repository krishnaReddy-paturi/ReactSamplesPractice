import React, { Component } from "react";
import LifeCycleB from "./LifeCycleB";

class LifeCycleA extends Component{
    constructor(props){
        super(props)
        this.state={
            name:'allState'
        }
        console.log('lifecycelA constr')
    }
    static getDerivedStateFromProps(props,state){
        console.log("deribed method")
        return null;
    }
    componentDidMount(){
        console.log("comp did mount")
    }
    render(){
        console.log('lifecycle render')
        return(
            
            <div>
                <LifeCycleB></LifeCycleB>
                lifecycelA
            </div>
        )
    }
}

export default LifeCycleA;