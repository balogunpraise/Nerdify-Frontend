import React from 'react'
import Navbar2 from '../navbar2/Navbar2'
import Navigations from '../navigations/Navigations'
import FooterCover from '../footerCover/FooterCover'
import Cover2 from '../cover2/Cover2'
import Selection from '../selection/Selection'
import BookGrid from '../bookGrid/bookGrid'
import Footer from '../footer/Footer'


const Books = () => {
    return (
        <div>
            <Navbar2/>
            <Navigations/>
            <Cover2/>
            <Selection/>
            <BookGrid/>
            <FooterCover/>
            <Footer/> 
        </div>
    )
}

export default Books
