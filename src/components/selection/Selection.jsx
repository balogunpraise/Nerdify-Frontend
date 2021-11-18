import React from 'react'
import './selection.scss'
import { useState } from 'react'

const Selection = () => {
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
        <div className="selection-div">
            <span className={books === true ? "span selected":"span"} onClick={selectBooks}>Books</span>
            <span className={author === true ?"span selected":"span"} onClick={selectAuthor}>Authors</span>
            <span className={publisher === true ?"span selected":"span"} onClick={selectPublisher}>Publisher</span>
        </div>
    )
}

export default Selection
