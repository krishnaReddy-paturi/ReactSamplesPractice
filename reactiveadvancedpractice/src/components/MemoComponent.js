import React from "react";

function MemoComponent({name}){
    console.log('memo comp')
return(
    <div>
{name}
    </div>
)
}
export default React.memo(MemoComponent);