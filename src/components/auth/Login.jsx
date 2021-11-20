import React, {useState} from 'react'
import Navbar2 from '../navbar2/Navbar2'
import Footer from '../footer/Footer'
import './auth.scss'
import LoginBody from './LoginBody'
import Register from './Register'



const Login = () => {
    const [signin, setSigin] = useState(true);
    const [register, setRegister] = useState(false);

    const handleSignin =()=>{
        setSigin(true)
        setRegister(false)
    }
    const handleRegister = ()=>{
        setRegister(true)
        setSigin(false)
    }

    return (
        <div className="auth-container">
            <Navbar2/>
            <div className="login-container">
                <div className="login-left">
                    <h2 className="signin-title">Hey!</h2>
                    <p className="signin-message">Welcome to the amazing book app...</p>
                    <div className="switch-container">
                        <button onClick={handleSignin} className={signin? "sign change": "sign"}>Sign in</button>
                        <button onClick={handleRegister} className={register?"reg change": "reg"}>Register</button>
                    </div>
                    {signin? <LoginBody/>:<Register/>}

                </div>
                <div className="login-right">
                    <button className="submit">Proceed</button>
                </div>
            </div>
            <Footer/>
            
        </div>
    )
}

export default Login
