import React, { useState } from "react";
//import './LoginRegister.css';
import { FaUser } from "react-icons/fa";
import { IoLockClosedOutline } from "react-icons/io5";
import { IoIosMail } from "react-icons/io";



const LoginRegistration =() => {

    const[action, setAction] = useState('');

    const registerLink = () => {
        setAction('active');
    };

    const LoginLink = () => {
        setAction('');
    };

    return (
        <div className="page">
          <div className={`wrapper ${action}`}>
            <div className="form-box login">
                <form action="">
                    <h1> Login</h1>
                    <div className="input-box">
                      <input type="text"
                      placeholder='username' required />
                    <FaUser className="icon"/> 
                    </div>
                    <div className="input-box">
                      <input type="password"
                      placeholder='Password' required />
                   
                   <IoLockClosedOutline className="icon"/>
                    </div>
                    <div className="remember-forgot">
                        <label>
                            <input type="checkbox" /> Remember me
                        </label>
                        <a href="#">Forgot password?</a> 
                    </div>
                    <button type="submit">Login</button>
                    <div className="register-link">
                        <p>Don't have an account yet ? <a href="#" onClick={registerLink} >Sign up</a></p>
                    </div>
                 </form>
            </div> 

            <div className="form-box register">
                <form action="">
                    <h1> Registration</h1>
                    <div className="input-box">
                      <input type="text"
                      placeholder='username' required />
                      <FaUser className="icon"/> 
                      
                    </div>
                    <div className="input-box">
                      <input type="email"
                      placeholder='email' required />
                      <IoIosMail className="icon"/>  
                    
                    </div>
                    <div className="input-box">
                      <input type="password"
                      placeholder='Password' required />
                      <IoLockClosedOutline className="icon"/>

                    </div>
                    <div className="remember-forgot">
                        <label>
                            <input type="checkbox" /> I agree to the temrs of utilisation
                        </label>
                    </div>
                    <button type="submit">Register</button>
                    <div className="register-link">
                        <p>Already have an account yet ? <a href="#" onClick={LoginLink}>Log in</a></p>
                    </div>
                 </form>
            </div>


           </div> 
        </div>  
    )
};

export default LoginRegistration;
