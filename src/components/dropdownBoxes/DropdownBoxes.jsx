import { BarChart, FormatColorFill, Functions, Timer } from '@material-ui/icons'
import React from 'react'
import './dropdownBoxes.scss'

const DropdownBoxes = () => {
    return (
        <div className="all">
            <div className="selection">
                <div className="select-left">
                    <Functions className="maths"/>
                </div>
                <div className="select-right">
                    <p>Mathematics</p>
                </div>
            </div>
            <div className="selection">
                <div className="select-left">
                    <FormatColorFill className="chem"/>
                </div>
                <div className="select-right">
                    <p>Chemistry</p>
                </div>
            </div>

            <div className="selection">
                <div className="select-left">
                    <Timer className="phy"/>
                </div>
                <div className="select-right">
                    <p>Physics</p>
                </div>
            </div>
            <div className="selection">
                <div className="select-left">
                    <BarChart className="eco"/>
                </div>
                <div className="select-right">
                    <p>Economics</p>
                </div>
            </div>



            <div className="selection">
                <div className="select-left">
                    <Functions className="maths"/>
                </div>
                <div className="select-right">
                    <p>Mathematics</p>
                </div>
            </div>
            <div className="selection">
                <div className="select-left">
                    <FormatColorFill className="chem"/>
                </div>
                <div className="select-right">
                    <p>Chemistry</p>
                </div>
            </div>

            <div className="selection">
                <div className="select-left">
                    <Timer className="phy"/>
                </div>
                <div className="select-right">
                    <p>Physics</p>
                </div>
            </div>
            <div className="selection">
                <div className="select-left">
                    <BarChart className="eco"/>
                </div>
                <div className="select-right">
                    <p>Economics</p>
                </div>
            </div>
        </div>
    )
}

export default DropdownBoxes
