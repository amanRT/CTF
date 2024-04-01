import HomePage from './pages/Homepage/Homepage';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';
import Reg from './pages/Register/reg';
import Login from './pages/Login/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComp from './components/NavbarComp/NavbarComp';
import Challenges from './pages/Challenges/challenges';
import MainLayout from './components/MainLayout/MainLayout';
function App() {

  return (
    <Router>
      <Routes>
      <Route path="/" element={<MainLayout />} />
        <Route exact path="/homepage" element={<HomePage />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Reg />} />
        <Route exact path="/challenges" element={<Challenges />} />
      </Routes>
    </Router>
  );
}

export default App;
