import React from 'react'
import Cover from '../components/cover/Cover'
import Navbar from '../components/Navbar'
import Sidebar from '../components/sidebar/Sidebar'
import { useState } from 'react'
import Featured from '../components/featured/Featured'
import Display from '../components/display/Display'
import FooterCover from '../components/footerCover/FooterCover'
import Footer from '../components/footer/Footer'



const Home = () => {
    const [isActive, setIsActive] = useState(false);

    const showSidebar=()=>{
        setIsActive(true);
    }

    const hideSidebar=()=>{
        setIsActive(false);
    }

    return (
        <div className="home">
           <Sidebar active={isActive} close={hideSidebar}/>
           <Navbar show={showSidebar}/>
           <Cover/>
           <Featured/>
           <Display/>
           <FooterCover/>
           <Footer/>
        </div>
    )
}

export default Home
