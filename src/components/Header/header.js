import React from 'react';
import "../../assets/styles/header.css"
import Navitems from './components/navitems';

function Header()
{
    return(
        <div className="header">
            <Navitems/>
        </div>
    )
}

export default Header