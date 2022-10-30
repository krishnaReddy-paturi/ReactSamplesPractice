import React from "react";

function ShortName({shortName}){
    if(shortName==='krishna'){
        throw new Error('duplicated name')
    }else{
return(
    <div>
      {shortName}
    </div>
)}
}
export default ShortName;