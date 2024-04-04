import React, { useState } from 'react';
import './login.css';
import { Link, useNavigate } from 'react-router-dom';
import NavBar1 from '../../components/Navbar1/Navbar';

const Login = ({ setId }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`${process.env.REACT_APP_API_URL}/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            if (!response.ok) {
                throw new Error('Enter valid credentials');
            }
            const data = await response.json();
            setId(data.id); // Set the user ID using the setId function
          

            navigate('/Homepage');

        } catch (error) {
            console.error('Error:', error);
            setError(error.message); // Set the error message state
        }
    };

    return (
        <>
       
        <NavBar1/>
        <div className="body">
            <section id="login-sec">
                <div className="login-box">
                    <form onSubmit={handleSubmit}>
                        <h2>Login</h2>
                        {error && <div className="error-message">{error}</div>}
                        <div className="input-box">
                            <span className="icon"><ion-icon name="mail"></ion-icon></span>
                            <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
                            <label>Email</label>
                        </div>
                        <div className="input-box">
                            <span className="icon"><ion-icon name="lock-closed"></ion-icon></span>
                            <input type="password" required value={password} onChange={(e) => setPassword(e.target.value)} />
                            <label>Password</label>
                        </div>
                        <button id="login-button" type="submit">Login</button>
                    </form>
                    <div className="register-link">
                        <p>Don't have an account? <Link to='/register'>Register</Link></p>
                    </div>
                </div>
            </section>
        </div>
        </>
    );
}

export default Login;
