import React, { Component } from "react";

function FunctionClick(){
    function userClickHandler(){
        console.log('clicked');
    }
    return(
        <div>
            <button onClick={userClickHandler}>handler</button>
        </div>
    )
}

export default FunctionClick;