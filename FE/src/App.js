import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Ebook from '../src/screens/Ebook';
import Finish from '../src/screens/Finish';
import About from './screens/About';
export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Ebook />} />
        <Route path="/finish" element={<Finish />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}
