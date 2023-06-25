import {BrowserRouter as Router, Route} from 'react-router-dom';
import {Routes} from "react-router";
import './App.css'
import Menu from "./components/Menu";
import HomePage from "./components/HomePage";
import DriftPage from "./components/DriftPage";
import TimeAttackPage from "./components/TimeAttackPage";
import ForzaPage from "./components/ForzaPage";


function App() {

  return (
        <Router>
            <div>
                <Menu />
                <div className="page">
                    <Routes>
                    <Route path="/"  element={<HomePage />} />
                    <Route path="/drift" element={<DriftPage />} />
                    <Route path="/timeattack" element={<TimeAttackPage />} />
                    <Route path="/forza" element={<ForzaPage />} />
                    </Routes>
                </div>
            </div>
        </Router>
  )
}

export default App
