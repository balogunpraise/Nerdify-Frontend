import { Book, BookmarkBorder,  Star } from '@material-ui/icons'
import React from 'react'
import './item.scss'

const Item = () => {
    return (
        <div className="carousel">
           
                
            
                    
                        <div className="bookCard">
                            <img src="https://i2.wp.com/www.creativindie.com/wp-content/uploads/2020/06/51kgIYwbZL.jpg?resize=324%2C500&ssl=1" alt=""></img>
                            <div className="semi-details">
                                <p className="title">THE DEATH OF MAGIC</p>
                                <p>jklkflkkjdkfo</p>
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

                    
                
            

        </div>
    )
}

export default Item
