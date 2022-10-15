import React from "react";

function Person({person},{key}){
    return(
<div>
<p>new component is: {key} {person.name} {person.age}</p>
</div>
    )
}

export default Person;