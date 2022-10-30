import React, { Component } from "react";
import UpdateLifeCycleB from "./UpdateLifeCycleB";


class UpdateLifeCycleA extends Component{
    constructor(props){
        super(props)
        this.state={
            name:'allState'
        }
        console.log('Update lifecycelA constr')
    }
    getSnapshotBeforeUpdate(prevProps,prevState){
            console.log('snapshot upade lifecylce A')
            return null;
    }
    static getDerivedStateFromProps(props,state){
        console.log("Update derived method")
        return null;
    }
    componentDidUpdate(){
        console.log("Update comp did update life A")
    }
    changeState=()=>
    {
        this.setState({
            name:'chaged value'
        })
    }
    render(){
        console.log('Update lifecycle render')
        return(
            
            <div>

                <UpdateLifeCycleB></UpdateLifeCycleB>
                <button onClick={this.changeState}>changeState</button>
                Update lifecycelA
            </div>
        )
    }
    shouldComponentUpdate(){
        console.log('update lifecycle A shouldcomp update')
        return true;
    }
}

export default UpdateLifeCycleA;