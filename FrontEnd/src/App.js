import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";

import LoginPage from "./pages/LoginPage";
import Sign from "./pages/SignUpPage";
import SecondPage from "./pages/SecondPage";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/signup" element={<Sign />} />
          <Route path="/dashboard" element={<SecondPage />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
