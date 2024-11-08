import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ModelingPage from "./pages/ModelingPage";
import { BrowserRouter as Router } from "react-router-dom";

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/modeling" element={<ModelingPage />} />
    </Routes>
  </Router>
);

export default App;
