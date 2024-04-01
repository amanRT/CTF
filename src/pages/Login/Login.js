import React from "react";
import './login.css'
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate hook
import Navbar from "../../components/Navbar1/Navbar";

function Login() {
    const navigate = useNavigate(); // Initialize useNavigate hook

    const handleLogin = () => {
        // Perform login logic here
        
        // Redirect to homepage after successful login
        navigate('/homepage');
    };

    return (
        <div className="body">
            <Navbar/>
            <section id="login-sec">
                <div className="login-box">
                    <form action="">
                        <h2>Login</h2>
                        <div className="input-box">
                            <span className="icon"><ion-icon name="mail"></ion-icon></span>
                            <input type="email" required></input>
                            <label>Email</label>
                        </div>
                        <div className="input-box">
                            <span className="icon"><ion-icon name="lock-closed"></ion-icon></span>
                            <input type="password" required></input>
                            <label>Password</label>
                        </div>
                    </form>
                    <button id="login-button" type="button" onClick={handleLogin}>Login</button> {/* Change type to "button" */}
                    <div className="register-link">
                        <p>Don't have an account? <Link to='/register'>Register</Link></p>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Login;
