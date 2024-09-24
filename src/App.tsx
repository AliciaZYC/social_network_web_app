import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Details from "./pages/Details";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Search from "./pages/Search";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Navigate to="Home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login/*" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/search" element={<Search />} />
          <Route path="/details/:did" element={<Details />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
