import { BookmarkBorder, Star } from '@material-ui/icons';
import React from 'react'
import './bookGrid.scss'
import Data from '../repositories/Data'

const BookGrid =()=>{
    return (
        <div className="bookGrid">
           
                
            {
                Data.map(post=>{
                    return(
                        <div className="bookCard">
                            <img src={post.imageUrl} alt=""></img>
                            <div className="semi-details">
                                <p className="title">{post.title}</p>
                                <p>{post.author}</p>
                                <div className="revs">
                                    <div className="stars">
                                        <Star className="star"/>
                                        <Star className="star"/>
                                        <Star className="star"/>
                                        <Star className="star"/>
                                        <Star className="star"/>
                                        </div>
                                        <BookmarkBorder style={{"fontSize": "16px"}}/>
                                    </div>
                                </div>
                            </div>

                        )
                })
            }

        </div>
    )

}
    
export default BookGrid
