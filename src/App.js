import HomePage from './pages/Homepage/Homepage';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';
import BelowNavbar from './components/BelowNavbar/BelowNavbar';
import Navbar from './components/Navbar1/Navbar';
import Contact from './components/Contact/contact';
import Reg from './pages/Register/reg';
import Login from './pages/Login/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComp from './components/NavbarComp/NavbarComp';
import Challenges from './pages/Challenges/challenges';

function App() {
  const isChallengesPage = window.location.pathname === '/challenges';

  return (
    <Router>
      {isChallengesPage ? <NavbarComp /> : <Navbar />}
      <Routes>
        <Route path='/' element={
            <>
              <BelowNavbar />
              <Contact />
            </>
          }/>
        <Route path='/' element={<BelowNavbar />} />
        <Route path='/' element={<Contact />} />
        <Route exact path="/homepage" element={<HomePage />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Reg />} />
        <Route exact path="/challenges" element={<Challenges />} />
      </Routes>
    </Router>
  );
}

export default App;
