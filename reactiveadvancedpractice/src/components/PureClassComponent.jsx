import React, { PureComponent } from "react";

class PureClassComponent extends PureComponent
{
render(){
    return(
        <div>
        pure component {this.props.name}
        </div>
    )
}
}

export default PureClassComponent;