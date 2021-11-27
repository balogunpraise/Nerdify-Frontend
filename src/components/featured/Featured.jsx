import { ControlPointDuplicateSharp, HeadsetMic, ImportContacts, LibraryBooks, Mic, MusicNote } from '@material-ui/icons'
import React from 'react'
import './featured.scss'

const Featured = () => {
    return (
        <div className="body">
            <h1>Get books in various formats</h1>
            <div className="container">
                <div className="card">
                    <ImportContacts className="icon"/>
                    <p>Book</p>
                </div>

                <div className="card">
                    <HeadsetMic className="icon"/>
                    <p>Audio Book</p>
                </div>

                <div className="card">
                    <LibraryBooks className="icon"/>
                    <p>Magazines</p>
                </div>
                <div className="card">
                    <Mic className="icon"/>
                    <p>Podcasts</p>
                </div>
                <div className="card">
                    <MusicNote className="icon"/>
                    <p>Sheet Music</p>
                </div>
            </div>
        </div>
    )
}

export default Featured
