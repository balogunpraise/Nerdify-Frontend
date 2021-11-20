import React from 'react'

const Register = () => {
    return (
        <div style={{"display":"flex", "flexDirection": "column", "gap":".9rem", "width":"20rem", "transition":".5s all ease"}}>
                    <input style={{"width": "100%"}} type="text" placeholder="Email or Username" />
                    <input style={{"width": "100%"}} type="password" placeholder="Enter Password" />
                    <input style={{"width": "100%"}} type="password" placeholder="Retype Password" />
                    
        </div>
    )
}

export default Register
