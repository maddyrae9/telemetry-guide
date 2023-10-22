import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from './components/Nav';

function App() {
  <body className="flex">
        <Router>
          <Nav />
  <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/anatomy" element={<Anatomy />} />
              <Route path="/basics" element={<Basics />} />
              <Route path="/interpreting" element={<Interpreting />} />
              <Route path="/measuring" element={<Measuring />} />
              <Route path="/rhythms" element={<Rhythms />} />
              <Route path="/phillips" element={<Phillips />} />
              </Routes>
  </main>
  </Router>
      </body>
}
export default App;
