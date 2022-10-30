import React, { Component } from "react";

class LifeCycleB extends Component{
    constructor(props){
        super(props)
        this.state={
            name:'allState'
        }
        console.log('lifecycelB constr')
    }
    static getDerivedStateFromProps(props,state){
        console.log("deribed B method")
        return null;
    }
    componentDidMount(){
        console.log("comp B did mount")
    }
    render(){
        console.log('lifecycle B render')
        return(
            
            <div>
                lifecycel B
            </div>
        )
    }
}

export default LifeCycleB;