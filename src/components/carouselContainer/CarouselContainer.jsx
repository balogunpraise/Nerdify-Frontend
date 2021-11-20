import React from 'react'
import Item from '../item/Item'
import './carouselContainer.scss'
import { useRef } from 'react'

const CarouselContainer = () => {
    //const listRef = useRef()
    return (
        <div className="carouselContainer ">
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
    )
}

export default CarouselContainer
