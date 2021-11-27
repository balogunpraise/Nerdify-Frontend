import { ArrowDropDown } from '@material-ui/icons'
import React,{useState} from 'react'
import DropdownBoxes from '../dropdownBoxes/DropdownBoxes'
import './navigations.scss'


const Navigations = () => {
    const [academics, setAcademics] = useState(false);
    const [novel, setNovel] = useState(false);
    const [magazine, setMagazine] = useState(false);
    const [engineering, setEngineering] = useState(false);
    const [science, setScience] = useState(false);
    const [music, setMusic] = useState(false);


    const handleClick = ()=>{
        setAcademics(!academics)
        setNovel(false)
        setMagazine(false)
        setEngineering(false)
        setScience(false)
        setMusic(false);
    }
    return (
        <div>
            <div className="navigation-bar"> 
            <span>Novels <ArrowDropDown/></span>
            <span className={academics?"change": null} onClick={handleClick}>Academic <ArrowDropDown/></span>
            <span>Magazines <ArrowDropDown/></span>
            <span>Engineering <ArrowDropDown/></span>
            <span>Science <ArrowDropDown/></span>
            <span>Music <ArrowDropDown/></span>
            </div>
            {
                academics ? <DropdownBoxes /> : null
            }
            
        </div>
        
        
    )
}

export default Navigations
