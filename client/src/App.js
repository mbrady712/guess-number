import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Home } from "./pages/home";
import { Login } from "./pages/login";
import { Leaderboard } from "./pages/leaderboard";
import { Stats } from "./pages/stats";
import { Navbar } from "./components/navbar";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/leaderboard" element={<Leaderboard />}/>
          <Route path="/stats" element={<Stats />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
