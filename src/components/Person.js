import React from "react";

function Person({person,key}){
    return(
<div>
    {/* //key props are not accessible in child components */}
<p>new component is: {key} {person.name} {person.age}</p> 
</div>
    )
}

export default Person;