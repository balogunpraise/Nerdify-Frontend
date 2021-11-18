import { Search } from '@material-ui/icons'
import React from 'react'
import './searchbar.scss'

const Searchbar = () => {
    return (
        <div className="contain">
            <div className="wrapper">
                <input type="text" placeholder="Search..." />
                <div className="search-btn">
                <Search/>
                </div>
            </div>
        </div>
        
    )
}

export default Searchbar
