import React, { Component } from "react";

function ChildComponent(props){
    return(
        <div>
            {/* //<button onClick={props.greetHandler}>greet</button> */}
            <button onClick={()=>props.greetHandler('child','krish',"raj")}>greet</button>
        </div>
    )
}

export default ChildComponent;