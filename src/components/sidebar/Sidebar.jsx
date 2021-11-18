import { Close, Search } from '@material-ui/icons'
import React from 'react'
import Searchbar from '../searchbar/Searchbar'
import './sidebar.scss'
import { Link } from 'react-router-dom'


const Sidebar = ({active, close}) => {
    return (
        <div className={active === true ? "sidebar show": "sidebar"}>
            <div className="sidebar-head">
                <img src="https://www.logo.wine/a/logo/Babylon.js/Babylon.js-Logo.wine.svg"  alt="" />
                <Close style={{"cursor": "pointer", "color":"#00293F" }} onClick={close}/>
            </div>
            <Searchbar />
            
            <div className="navs">
                <div className="download-types">
                <Link style={{"cursor" : "pointer", "textDecoration":"none"}} to="/books">
                    <p>Books</p>
                </Link>
                            <ul>
                              
                                    <li>Comic</li>
                                    <li>Romance</li>
                                    <li>Fiction</li>
                                    <li>Biographies</li>
                                    <li>Poems </li>
                                    <li>Sheet music</li>
        
                            </ul>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
