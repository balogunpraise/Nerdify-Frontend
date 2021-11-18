import { ArrowDropDown } from '@material-ui/icons'
import React from 'react'
import './navigations.scss'

const Navigations = () => {
    return (
        <div className="navigation-bar">
            <span>Comic <ArrowDropDown/></span>
            <span>Romance <ArrowDropDown/></span>
            <span>Fiction <ArrowDropDown/></span>
            <span>Biographies <ArrowDropDown/></span>
            <span>Poems <ArrowDropDown/></span>
            <span>Sheet music <ArrowDropDown/></span>
        </div>
    )
}

export default Navigations
