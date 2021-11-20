import { ArrowBackIosRounded, ArrowForwardIosRounded, Book, Bookmark, CloudDownload, PlayArrow,  Share,  Star } from '@material-ui/icons'
import React from 'react'
import { useRef } from 'react'
import Navbar2 from '../navbar2/Navbar2'
import Navigations from '../navigations/Navigations'
import FooterCover from '../footerCover/FooterCover'
import Footer from '../footer/Footer'
import Item from '../item/Item'
import './details.scss'


const Details = () => {
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
    return (
        <div className="details-body">
            <Navbar2/>
            <Navigations/>
            <div className="details">
                <div className="card-left">
                    <div className="card1">
                            
                            <img src="https://hips.hearstapps.com/digitalspyuk.cdnds.net/15/50/1449878132-9781781100264.jpg?resize=480:*" alt="" />
                            
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
                        <h2>Harry Potter: And The Death Hallows</h2>
                        <p className="written">Written by: <span>J.K Rowling</span></p>
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
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt eum molestias consectetur enim expedita ab reiciendis ratione non. Impedit nihil, beatae animi delectus commodi, eveniet quas voluptatibus expedita porro soluta sunt ducimus a doloremque perferendis voluptatem voluptate suscipit officia libero? Ex quas cum quidem quis perferendis deleniti aliquam, consequuntur quam doloremque voluptate explicabo necessitatibus sint sed quos iusto doloribus earum rem recusandae sequi, iste dolore? Sunt atque voluptas ratione assumenda aliquid voluptatibus facere quas veniam, sit.</p>
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
