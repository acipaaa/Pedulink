import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import { Galeri, Galeri_detail } from "./components";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Galeri />} />
        <Route path="/galeri-detail" element={<Galeri_detail />} />
      </Routes>
    </Router>
  );
};

export default App;
