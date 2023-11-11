import React, { useState } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";

import LoginPage from "./pages/LoginPage";
import Sign from "./pages/SignUpPage";
import SecondPage from "./pages/SecondPage";

function App() {
  const [loggedInUser, setLoggedInUser] = useState(
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTRlNGYzOTI5ZWNhN2FmNmJlMGVkNDEiLCJuYW1lIjoiUmlzc2hhYiBTaW5nbGEiLCJpc0FkbWluIjpmYWxzZSwiaWF0IjoxNjk5Njg5MjI4LCJleHAiOjE3MDAyOTQwMjh9.oXTa17YyDZWLuW9aT9Z3dHLZjUK_P9Jhctd_VPhaKd8"
  );
  // console.log(loggedInUser);
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
