import React from 'react'
import './display.scss'
import { DoubleArrow } from '@material-ui/icons' 

const Display = () => {
    return (
        <div className="display-container">
            <h2 style={{"display":"flex", "alignItems":"center"}}><DoubleArrow/>Get the best books</h2>
            <div className="grid-container">
                <div className="one"></div>
                <div className="two"></div>
                <div className="three"></div>
                <div className="four"></div>
                <div className="five"></div>
                <div className="six"></div>
                <div className="seven"></div>
                <div className="eight"></div>
                <div className="nine"></div>
                <div className="ten"></div>
                
            </div>
        </div>
    )
}

export default Display
