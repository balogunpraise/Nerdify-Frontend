import { ArrowDropDown, Notifications, Search } from '@material-ui/icons'
import React from 'react'
import { useState } from 'react'
import "./loginNavbar.scss"
import { Link } from 'react-router-dom'


const LoginNavbar = ({show}) => {
    const [isScrolled, setIsScrolled] = useState(false);
    
    window.onscroll = () =>{
        setIsScrolled(window.pageYOffset === 0? false : true);
        return()=>(window.onscroll = null);
    }
    
    return (
        <div className={isScrolled?"navbar scrolled" : "navbar"}>
           <div className="container">
           <Link style={{"cursor" : "pointer", "textDecoration":"none"}} to="/">
               <div className="left">
                   <img src="https://www.logo.wine/a/logo/Babylon.js/Babylon.js-Logo.wine.svg" alt=""/>
               </div>
            </Link>
               <div className="right">
                   <Search className="icon"/>
                   <span>EXPLORE</span>
               </div>
           </div>
        </div>
    )
}

export default LoginNavbar
