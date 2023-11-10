import React, { useState } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";

import LoginPage from "./pages/LoginPage";
import Sign from "./pages/SignUpPage";
import SecondPage from "./pages/SecondPage";

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route
            path="/"
            element={<LoginPage setLoggedInUser={setLoggedInUser} />}
          />
          <Route path="/signup" element={<Sign />} />
          <Route
            path="/dashboard"
            element={<SecondPage loggedInUser={loggedInUser} />}
          />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
