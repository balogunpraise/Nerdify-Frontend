import { BookmarkBorder, Star } from '@material-ui/icons';
import React,{useState, useEffect} from 'react'
import './bookGrid.scss'
import axios from 'redaxios';





const BookGrid =()=>{
    const [state, setState] = useState([])
    useEffect(() => {
        axios.get("https://localhost:44361/Api/Book/all-books")
        .then(response =>{
            setState(response.data)
        })
    },[])
    

const getItemById = (id) =>{
    const book = state.find(x => x.id === id)
    return book;
}

const handleDetaisl =(id)=>{
    const book = getItemById(id);
    setDetail(book)
}


    return (
        <div className="bookGrid">    
            {
                state.map(post=>{
                    return(
                        <a href ={`book-details/${post.id}`} key={post.id} style={{"textDecoration":"none"}}>
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
