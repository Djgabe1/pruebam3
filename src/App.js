import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home';
import Topbar from './components/topbar/Topbar';



function App() {
  return (
    <Router>
          <Topbar />
          <Home />
            <Routes>
                <Route path='/' component={Home}/>
                
            </Routes>
        </Router>
  );
}

export default App;
