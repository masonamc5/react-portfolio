import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/header.jsx';
import Footer from './components/Footer/footer.jsx';
import Contact from './components/Contact/contact.jsx';
import AboutMe from './components/AboutMe/aboutme.jsx';
import Portfolio from './components/Portfolio/Portfolio.jsx';
import Resume from './components/Resume/Resume.jsx';
import './app.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<AboutMe />} /> 
            <Route path="/contact" element={<Contact />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/resume" element={<Resume />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

