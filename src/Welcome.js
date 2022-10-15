import React,{Component} from "react";

class Welcome extends Component{
    render(){
        const {name,shortName,children} = this.props
        //const {state1,state2} = this.state
        return(
            <h1>inside of welcome component!!: {name} a.k.a {shortName} {children} </h1>
        )
    }
}
export default Welcome;