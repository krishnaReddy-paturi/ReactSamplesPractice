import React, { Component } from "react";

class UpdateLifeCycleB extends Component{
    constructor(props){
        super(props)
        this.state={
            name:'allState'
        }
        console.log('update lifecycelB constr')
    }
    static getDerivedStateFromProps(props,state){
        console.log("update deribed B method")
        return null;
    }
    
    render(){
        console.log('Update lifecycle B render')
        return(
            
            <div>
                Updatelifecycel B
            </div>
        )
    }
    componentDidUpdate(){
        console.log("Update comp did update life B")
    }
    shouldComponentUpdate(){
        console.log('update lifecycle B shouldcomp update')
        return true;
    }
    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log('snapshot upadeate lifecylce B')
        return null
}
}

export default UpdateLifeCycleB;