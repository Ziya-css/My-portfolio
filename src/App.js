import React from "react";
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import Ziya from "./components/Ziya";
import Contact from "./components/Contact";
import About from "./components/About"; 
import Myproject from "./components/Myproject";
import Myblog from "./components/Myblog";
import "./App.css";

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
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Veniam sit voluptatem asperiores doloribus aliquid pariatur
                    consectetur fuga eius nemo. Mollitia ut at amet ipsum
                    nostrum saepe debitis voluptatem architecto odit.
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
