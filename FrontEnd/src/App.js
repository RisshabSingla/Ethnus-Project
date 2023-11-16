import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginPage from "./pages/LoginPage";
import Sign from "./pages/SignUpPage";
import SecondPage from "./pages/SecondPage";

function App() {
  const [loggedInUser, setLoggedInUser] = useState("");
  const [loggedInID, setLoggedInID] = useState("");
  // console.log(loggedInUser);
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <LoginPage
                setLoggedInUser={setLoggedInUser}
                setLoggedInID={setLoggedInID}
              />
            }
          />
          <Route path="/signup" element={<Sign />} />
          <Route
            path="/dashboard"
            element={
              <SecondPage
                setLoggedInUser={setLoggedInUser}
                loggedInUser={loggedInUser}
                loggedInID={loggedInID}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
