import React , {useState} from 'react';
import "../../../assets/styles/navitems.css"
import {preLoginItems,loggedInItems} from  "../../../assets/config"
import Button from '../components/button'

function Navitems()
{
    const [loggedIn,setLogin] = useState(false)
    
    
    const handler = () =>
    {
        setLogin(!loggedIn)
        
    }

    
    return(
        <div className="nav">
            <ul className="navitems">
                {
                    
                    loggedIn ? 
                    loggedInItems.map(l =>{
                        return <li>{l.label}</li>
                    }):
                    preLoginItems.map(l=>{
                        return <li>{l.label}</li>
                    })
                }

            </ul>
            <Button onclick={handler} value={!loggedIn ? "Log in":"Sign out"} />
        </div>
    )
}

export default Navitems