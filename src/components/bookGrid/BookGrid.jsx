import { BookmarkBorder, Star } from '@material-ui/icons';
import React from 'react'
import './bookGrid.scss'
import { useState } from 'react';

const BookGrid = () => {
    // const runCallback =(cb)=>{
    //     return cb();
    // }

    return (
        <div className="bookGrid">
           
                
                        <div className="bookCard">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjUgqjOp0m5geFQN2KOLHE10qJSwRC26Q-zw&usqp=CAU" alt=""></img>
                            <div className="semi-details">
                                <p className="title">From Golthe to Gundolf</p>
                                <p>Roger Paulin</p>
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

                        <div className="bookCard">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjUgqjOp0m5geFQN2KOLHE10qJSwRC26Q-zw&usqp=CAU" alt=""></img>
                            <div className="semi-details">
                                <p className="title">From Golthe to Gundolf</p>
                                <p>Roger Paulin</p>
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

                        <div className="bookCard">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjUgqjOp0m5geFQN2KOLHE10qJSwRC26Q-zw&usqp=CAU" alt=""></img>
                            <div className="semi-details">
                                <p className="title">From Golthe to Gundolf</p>
                                <p>Roger Paulin</p>
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

export default BookGrid
