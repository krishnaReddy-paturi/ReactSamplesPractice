import React, { Component } from "react";
import ParentClassComponent from "./ParentClassComponent";

class RegularClassComponent extends Component{

render(){
    return(
        <div>
        <p>RegularClassComponent {this.props.name}</p>
        
        </div>
    )
}
}
export default RegularClassComponent;