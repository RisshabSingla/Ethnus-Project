import React from 'react';
import './App.css';
import LoginPage from './LoginPage';  
import Sign from './SignUpPage';
import { HashRouter, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/signup" element={<Sign />} />
          {/* <Route path="/DashBoard" element={<StudentList />} />
          <Route path="/Playlist" element={<EditStudent />} /> */}
        </Routes>
      </HashRouter>
      
    </div>
  );
}

export default App;
