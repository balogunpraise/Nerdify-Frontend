import { BookmarkBorder, Star } from '@material-ui/icons';
import React from 'react'
import './publisherGrid.scss'
import Publisher from '../repositories/Publisher'

const PublisherGrid =()=>{
    return (
        <div className="bookGrid">    
            {
                Publisher.map(post=>{
                    return(
                        <div className="bookCard">
                            <img src={post.imageUrl} alt=""></img>
                            <div className="semi-details">
                                <p className="title">{post.name}</p>
                            </div>
                        </div>
                    )
                })
            }

        </div>
    )

}
    
export default PublisherGrid;
