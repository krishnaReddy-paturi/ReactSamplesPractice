import React from "react";

// function Hello(){
//     return <h3>Hi myaan!! gud morning.</h3>
// }
const Hello=(props)=>{
    return(
        <div className='Hello'>
            <h1>Hi people of ALSP {props.name} a.k.a {props.shortName} {props.children}</h1>
        </div>
    )
}
// const Hello=()=>{
//     return React.createElement('div',{id:'hello',className:'hello'},React.createElement('h1',null,'hello world, u have countries..'))
    //1st param is string which specifies the HTML tag to be redered.
    // for our example 'div'
    //2nd param is: we get to pass any optional properties. as of now null
    //3rd pram is children for the HTML element., i.e., children for div tag
    //here we will send some hello data
    //2nd param is object. Object of key,value pairs that will b applied to the element
//}
export default Hello;