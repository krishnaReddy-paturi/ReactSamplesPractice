import React, { Component } from "react";
import ChildComponent from "./ChildComponent";

class ParentComponent extends Component{
    constructor(props){
        super(props)
        this.state={
            parentName: 'parent'
        }
        this.greetParent=this.greetParent.bind(this);
    }
    greetParent(childName,user,keeper){
        alert(`HELLO ${this.state.parentName} from ${childName} ${user} ${keeper}`)
    }
    render(){
        return(
                <ChildComponent greetHandler={this.greetParent}></ChildComponent>
        )
    }
}

export default ParentComponent;