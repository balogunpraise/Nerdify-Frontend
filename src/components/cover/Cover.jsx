import { PlayArrow } from '@material-ui/icons'
import React from 'react'
import './cover.scss'

const Cover = () => {
    return (
        <div className="cover">
            <div className="container">
                <div className="left">
                    <h1 className="intro">
                        Endless Variety of Books
                        
                    </h1>
                    <p style={{"fontSize":"1.5rem"}}>Read from anywhere and at anytime</p>
                    <button><PlayArrow/> Read Free For 30 Days</button>
                    <p>Only N500/month. Cancel anytime.</p>
                </div>
                <div className="right">
                    <img src="https://st.depositphotos.com/1001877/4800/i/600/depositphotos_48002027-stock-photo-education-concept-bookshelf-with-books.jpg" alt="" />
                </div>
            </div>
                
           
        </div>
    )
}

export default Cover
