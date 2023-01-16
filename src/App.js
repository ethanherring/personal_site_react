import JobComponent from './components/JobComponent';
import SkillsComponent from './components/SkillsComponent';
import ScrollTopButton from './components/ScrollTopButton';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar';

import Contact from './pages/Contact'
import AppRouter from './components/AppRouter';
import HomePage from './pages/Home';
import About from './pages/About';

function App() {
  return (
    
      <div className="App">
        <header className="App-header">
          
          <BrowserRouter>
            <Navbar />
            <Routes>
                <Route exact path='/' element={<HomePage />}
                />
                <Route path="/contact" element={
                    <Contact />
                } />
                <Route path="/about" element={
                    <About />
                } />
            </Routes>
        </BrowserRouter>
        

        </header>
        <body>


        </body>

        <footer className="App-footer">
          <p>Created by Ethan Herring - 2023</p>
          {/* Adds functionality to return to top of page */}
          <div className="scrollTopButton-container">
            <ScrollTopButton />
          </div>
        </footer>

      </div>

  );
}

export default App;
