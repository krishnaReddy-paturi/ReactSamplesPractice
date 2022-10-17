import React from "react";

import './MyStyle.css'
function StyleSheet(props){
    let className=props.primary? 'primary':''
 return(
    <div>
    {/* // <h1 className={`${className} font-xl`}>StyleSheet</h1> */}
    <h1 classNames= 'primary,font-xl'>StyleSheet</h1>
    <h1 className='error'>error</h1>
    </div>
 )
}
export default StyleSheet;