import React from "react";
import { Route, BrowserRouter as Router, Routes} from "react-router-dom";
import AboutPage from './components/pages/AboutPage';
import './App.css';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<AboutPage />}/>
            </Routes>
        </Router>
    );
}

export default App;