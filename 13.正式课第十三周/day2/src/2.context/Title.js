import React from "react";
import PropTypes from "prop-types";
class Title extends React.Component{
    constructor(){
        super()
    }
    static contextTypes={
        color:PropTypes.string,
        a:PropTypes.number
    }
    render(){
        return <div>
            {this.context.color}
            {this.context.a}
        </div>
    }
}
export default Title;