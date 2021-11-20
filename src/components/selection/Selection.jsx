import React from 'react'
import './selection.scss'

const Selection = (props) => {

    return (
        <div className="selection-div">
            <span className={props.books === true ? "span selected":"span"} onClick={props.setBooks}>Books</span>
            <span className={props.author === true ?"span selected":"span"} onClick={props.setAuthor}>Authors</span>
            <span className={props.publisher === true ?"span selected":"span"} onClick={props.setPublisher}>Publisher</span>
        </div>
    )
}

export default Selection
