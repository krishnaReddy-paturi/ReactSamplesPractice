import React from "react";
// function Greet(){
//     //return <h1>hello myaaan!</h1>
   
// }

// const Greet=(props)=>
 
//     <h1>Hi team! {props.name} a.k.a {props.shortName} {props.children}</h1>

// destructring props.
// const Greet=({name,shortName,children})=>
 
//     <h1>Hi team!! {name} a.k.a {shortName} {children}</h1>

const Greet= props=>{
const {name,shortName,children} =props
 return (
    <h1>Hi team!! {name} a.k.a {shortName} {children}</h1> )
}

export default Greet;