import React,{Component} from "react";

class Welcome extends Component{
    render(){
        const {name,lover,children} = this.props
        //const {state1,state2} = this.state
        return(
            <h1>inside of welcome component!!: {name} a.k.a {lover} {children} </h1>
        )
    }
}
export default Welcome;