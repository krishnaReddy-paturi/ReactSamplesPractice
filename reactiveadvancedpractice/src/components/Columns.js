import React from "react";

function Columns()
{
    const arr=['ram','raj','stephen']
    return(
        <>
            {
                arr.map(item=>{
                    <React.Fragment>
                            <p>{item}</p>
                            
                        </React.Fragment>
                })
            }
            <td>name</td>
            <td>Allstate</td>
        </>
    )
}
export default Columns;