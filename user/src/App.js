import HomePage from './pages/Homepage/Homepage';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';
import Reg from './pages/Register/reg';
import Login from './pages/Login/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import Challenges from './pages/Challenges/challenges';
import Challenges2 from './pages/Challenges/challenges2';
import MainLayout from './components/MainLayout/MainLayout';
import Progress from './pages/Progress/Progress';
function App() {

  return (
    <Router>
      <Routes>
      <Route path="/" element={<MainLayout />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Reg />} />
        <Route exact path="/challenges" element={<Challenges />} />
        <Route path="/challenges2" element={<Challenges2 />} />
        <Route path='/progress' element={<Progress/>}/>
      </Routes>
    </Router>
  );
}

export default App;
