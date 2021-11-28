import { ArrowBackIosRounded, ArrowForwardIosRounded, Book, Bookmark, CloudDownload, DetailsRounded, PlayArrow,  Share,  Star } from '@material-ui/icons'
import React, {useRef, useEffect, useState} from 'react'
import Navbar2 from '../navbar2/Navbar2'
import Navigations from '../navigations/Navigations'
import FooterCover from '../footerCover/FooterCover'
import Footer from '../footer/Footer'
import Item from '../item/Item'
import './details.scss'
import axios from 'redaxios';
import { useParams } from 'react-router'



const Details = () => {
    const [details, setDetails] = useState({})
    //let details = []
    const listRef = useRef()


    const handleClick = (direction) =>{
        const distance = listRef.current.getBoundingClientRect().x - 50
        const distance2 = listRef.current.getBoundingClientRect().x - 25
        if(direction === "left"){
            listRef.current.style.transform = `translateX(${200 + distance}px)`
        }
        if(direction === "right"){
            listRef.current.style.transform = `translateX(${-200 + distance2}px)`
        }     
    }



    let {id} = useParams();

    useEffect(() => {
            axios.get(`https://localhost:44361/Api/Book/${id}`)
            .then(response => {
                setDetails(response.data) 
            })
        }, [])
    console.log(details);
  




    return (
        <div className="details-body">
            <Navbar2/>
            <Navigations/>
            
                
                        <div className="details">
                            <div className="card-left">
                            <div className="card1">
                                    
                                    <img src={details.pictureUrl} alt="" />
                                    
                                    <div className="card-body1">
                                        <div className="buttons">
                                            <button className="but colored"><Book/> Read Book</button>
                                            <button className="but"><PlayArrow/>Play Audio</button>
                                        </div>
                                    </div>
                            </div>
    
                        </div>
    
                        <div className="card-right">
                            <div className="bio">
                                <h2>{details.title}</h2>
                                <p className="written">Written by: <span>{details.author}</span></p>
                                <div className="ratings">
                                    <div className="rev-stars">
                                        <Star/>
                                        <Star/>
                                        <Star/>
                                        <Star/>
                                        <Star/>
                                    </div>
                                    <p>5/5(1,600 Ratings)</p>
                                </div>
        
                            </div>
    
                            <div className="actions">
                                <button className="but plain"><Bookmark/>  Save For Later</button>
                                <button className="but plain"><CloudDownload/> Download</button>
                                <button className="but plain"><Share/> Share</button>
                            </div>
                            <div className="description">
                                <h4>Description</h4>
                                <p>{details.description}</p>
                            </div>
                        </div>
                </div>
                
            
           
            <div className="car">
                <ArrowBackIosRounded className="ball left" onClick={()=>handleClick("left")}/>
                <ArrowForwardIosRounded className="ball right" onClick={()=>handleClick("right")}/>
                <div className="carouselSection" style={{"borderTop":"1px solid #CCCACA", "borderBottom":"1px solid #CCCACA", "padding":"1.5rem"}}>
                    <h3 style={{"marginLeft": "2rem", "color":"#0D3449"}}>Related Books</h3>
                    <div className="carouselContainer" ref={listRef}>
                        <Item/>
                        <Item/>
                        <Item/>
                        <Item/>
                        <Item/>
                        <Item/>
                        <Item/>
                        <Item/>
                        <Item/>
                        <Item/>
                        <Item/>
                        <Item/>
                        <Item/>
                        <Item/>
                        <Item/>
                        <Item/>
                        <Item/>
                        <Item/>
                        <Item/>
                        <Item/>
                        <Item/>
                        <Item/>
                        <Item/>
                        <Item/>
                        <Item/>
                        <Item/>
                        <Item/>
                        <Item/>
                    </div>
                </div>
                 
            </div>
            <FooterCover/>
            <Footer/>
        </div>
        
    )
}

export default Details
