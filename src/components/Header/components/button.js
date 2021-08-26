import React from 'react'
import "../../../assets/styles/button.css"

function Button(props)
{
    return(
        <button className="loginbutton" onClick={props.onclick}>{props.value}</button>
    )
}

export default Button