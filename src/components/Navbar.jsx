import { ArrowDownward, ArrowDropDown, LockOpen, Notifications, Search } from '@material-ui/icons'
import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import "./navbar.scss"

const Navbar = ({show}) => {
    const [isScrolled, setIsScrolled] = useState(false);
    
    window.onscroll = () =>{
        setIsScrolled(window.pageYOffset === 0? false : true);
        return()=>(window.onscroll = null);
    }
    
    return (
        <div className={isScrolled?"navbar scrolled" : "navbar"}>
           <div className="container">
               <div className="left">
                   <button onClick={show}>&#9776;</button>
                   <img src="https://www.logo.wine/a/logo/Babylon.js/Babylon.js-Logo.wine.svg" alt=""/>
               </div>
              
               <div className="right">
                   <Search className="icon"/>
                   <Link to="auth/login" style={{"textDecoration":"none","color":"white"}}>
                   <span style={{"display":"flex", "alignItems": "center", "cursor":"pointer"}}>LOGIN <LockOpen/> </span>
                   </Link>
                   {/* <Notifications className="icon"/> */}
                   {/* <img src="http://scontent-los2-1.xx.fbcdn.net/v/t1.6435-9/199878950_498499794695535_5350658408243283733_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeELQ7ng-b2-K9FcRQOoF3-vGpiu_b0FhooamK79vQWGiqF_NifKh0a71mjBvwLlIo6LrPHf0zVXGIbmbvAikZ_L&_nc_ohc=Z0ufTmJSdKoAX_3KaoS&_nc_ht=scontent-los2-1.xx&oh=8a8d52bccd709c5c5b9e86bb52324d37&oe=61BBD354" alt=""/> */}
                    {/* <div className="profile" >
                        <ArrowDropDown className="icon"/>
                        <div className="options">
                            <span>Settings</span>
                            <span>Logout</span>
                        </div>
                    </div>
                     */}
               </div>
           </div>
        </div>
    )
}

export default Navbar
