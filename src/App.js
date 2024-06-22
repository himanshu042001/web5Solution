import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Services from './components/Services';
import Navbar from './components/Navbar';

function App() {
    return (
        <Router>
            <div className="app">
                {/* <Navbar /> */}
                <Header/>
                </div>

                    <main className="main-content">
                        <Routes>
                      
                            <Route path="/" element={<Home />} />
                            <Route path="/services" element={<Services />} />
                        </Routes>
                    </main>
        </Router>
    );
}

export default App;
