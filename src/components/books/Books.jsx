import React from 'react'
import Navbar2 from '../navbar2/Navbar2'
import Navigations from '../navigations/Navigations'
import FooterCover from '../footerCover/FooterCover'
import Cover2 from '../cover2/Cover2'
import Selection from '../selection/Selection'
import BookGrid from '../bookGrid/bookGrid'
import PublisherGrid from '../publisherGrid/PublisherGrid'
import AuthorGrid from '../authorGrid/AuthorGrid'
import Footer from '../footer/Footer'
import { useState } from 'react'

    
const Books = () => {

    const [books, setBooks] = useState(true)
    const [author, setAuthor] = useState (false)
    const [publisher, setpublisher] = useState (false)

    const selectBooks =()=>{
        setBooks(true)
        setAuthor(false)
        setpublisher(false)
    }

    const selectAuthor =()=>{
        setBooks(false)
        setAuthor(true)
        setpublisher(false)
    }

    const selectPublisher =()=>{
        setBooks(false)
        setAuthor(false)
        setpublisher(true)
    }
    return (
        <div>
            <Navbar2/>
            <Navigations/>
            <Cover2/>
            <Selection books={books} author={author} publisher={publisher}
            setBooks={selectBooks} setAuthor={selectAuthor} setPublisher={selectPublisher}
            />
            {books  ? <BookGrid/> : null}
            {publisher ? <PublisherGrid/>: null}
            {author ? <AuthorGrid/> : null}
            <FooterCover/>
            <Footer/> 
        </div>
    )
}

export default Books
