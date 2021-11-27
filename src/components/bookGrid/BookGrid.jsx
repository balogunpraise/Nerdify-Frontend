import { BookmarkBorder, Star } from '@material-ui/icons';
import React,{useState, useEffect} from 'react'
import './bookGrid.scss'
import axios from 'redaxios';
import { Link } from '@material-ui/core';




const BookGrid =(props)=>{
    const [state, setState] = useState([])
    useEffect(() => {
        axios.get("https://localhost:44361/Api/Book/all-books")
        .then(response =>{
            setState(response.data)
        })
    },[])
    

    return (
        <div className="bookGrid">    
            {
                state.map(post=>{
                    return(
                        <a href={`/Book/${props.id}`} key={post.id}>
                            <div className="bookCard">
                            <img src={post.pictureUrl} alt=""></img>
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
                        </a>
                        )
                })
            }

        </div>
    )

}
    
export default BookGrid
