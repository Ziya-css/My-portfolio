import React from "react";
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import Ziya from "./components/Ziya";
import Contact from "./components/Contact";
import About from "./components/About"; 
import Myproject from "./components/Myproject";
import Myblog from "./components/Myblog";
import "./components/Ziya.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <header className="App-header">
                <div className="left-section">
                  <h1>Hello 👋🏼</h1>
                  <h2>I'm Ziya Abdullayev</h2>
                  <p>Thank you for visiting my website!
If you'd like to learn more, feel free to check out the About page.
                  </p>
                  <button>Download Resume</button>
                </div>
                <Ziya />
              </header>
              
            }
          />
          <Route path="/contact" element={<Contact />} />
          <Route path="/Aboutme" element={<About />} />
          <Route path="/projects" element={<Myproject />} />
          <Route path="/Myblog" element={<Myblog />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
