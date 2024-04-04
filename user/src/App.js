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
        <Route path="/login" element={<Login setId={setId} />} /> {/* Use Login component inside Route */}
        <Route path="/Homepage" element={<HomePage id={id} />} /> {/* Use Homepage component inside Route */}
        <Route exact path="/register" element={<Reg />} />
        <Route  path="/challenges" element={<Challenges id={id}/>} />
        <Route  path="/challenges2" element={<Challenges2 id={id}/>} />
        <Route path='/progress' element={<Progress />} />
      </Routes>
    </Router>
  );
}

export default App;
