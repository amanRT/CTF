import React , {useState} from "react";
import './Registration.css';
import { Link, useNavigate} from "react-router-dom";
import Navbar from "../../components/Navbar1/Navbar";

function Reg() {
    const [teamname, setTeamName] = useState('');
    const [leadername, setLeaderName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [contact, setContact] = useState('');
    const [player2, setPlayer2] = useState('');
    const [player3, setPlayer3] = useState('');
    const navigate=useNavigate();

    const handleSubmit =async (e) => {
        e.preventDefault();
    
        try {
            const response = await fetch("http://localhost:3000/userRegister", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                teamname, leadername,email, password,contact,player2,player3
              }),
            });
      
            if (!response.ok) {
              throw new Error("Failed to register user");
            }
      
            // const data = await response.json();
            navigate('/login');
          } catch (error) {
            console.error("Error:", error);
          }
    
    }

    return (
        <div id="registration-section" className="body">
            <Navbar/>
            <section id="reg-sec">
                <div className="register-login-box">
                    <form onSubmit={handleSubmit}>
                        <h2>Registration</h2>
                        <div className="register-input-box">
                            <span className="icon"><ion-icon name="people"></ion-icon></span>
                            <input type="text" placeholder="Team Name" required onChange={(e) => setTeamName(e.target.value)} value={teamname} />
                            <label>Team Name</label>
                        </div>
                        <div className="register-input-box">
                            <span className="icon"><ion-icon name="person"></ion-icon></span>
                            <input type="text" placeholder="Leader" required onChange={(e) => setLeaderName(e.target.value)} value={leadername} />
                            <label>Leader</label>
                        </div>
                        <div className="register-input-box">
                            <span className="icon"><ion-icon name="mail"></ion-icon></span>
                            <input type="email" placeholder="Email" required onChange={(e) => setEmail(e.target.value)} value={email} />
                            <label>Email</label>
                        </div>
                        <div className="register-input-box">
                            <span className="icon"><ion-icon name="lock-closed"></ion-icon></span>
                            <input type="password" placeholder="Password" required onChange={(e) => setPassword(e.target.value)} value={password} />
                            <label>Password</label>
                        </div>
                        
                        <div className="register-input-box">
                            <span className="icon"><ion-icon name="logo-whatsapp"></ion-icon></span>
                            <input type="tel" placeholder="WhatsApp Number" required onChange={(e) => setContact(e.target.value)} value={contact} />
                            <label>WhatsApp Number</label>
                        </div>
                        <div className="register-input-box">
                            <span className="icon"><ion-icon name="person"></ion-icon></span>
                            <input type="text" placeholder="Player 2" onChange={(e) => setPlayer2(e.target.value)} value={player2} />
                            <label>Player 2</label>
                        </div>
                        <div className="register-input-box">
                            <span className="icon"><ion-icon name="person"></ion-icon></span>
                            <input type="text" placeholder="Player 3" onChange={(e) => setPlayer3(e.target.value)} value={player3} />
                            <label>Player 3</label>
                        </div>
                        <button id='reg-button' type="submit">Submit</button>
                    </form>
                    <div className="register-register-link">
                        <p>Already have an account? <Link to='/login'>Login</Link></p>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Reg;
