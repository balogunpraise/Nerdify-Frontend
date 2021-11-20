import { ArrowRightAlt } from '@material-ui/icons';
import React from 'react'

const LoginBody = () => {
    return (
        <div style={{"display": "flex", "flexDirection":"column", "gap":"1rem","width":"20rem", "transition":".5s all ease"}}>
            <input style={{"width": "100%"}} type="text" placeholder="Email or Username" />
                    <input style={{"width": "100%"}} type="password" placeholder="Enter Password" />
                    <button style={{"width": "100%"}} className="more-action">Forgot Password <ArrowRightAlt/> </button>
        </div>
    )
}
export default LoginBody;
