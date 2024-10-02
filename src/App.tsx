import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  Link,
} from "react-router-dom";
import Details from "./pages/Details";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Search from "./pages/Search";
import UpdateProfile from "./pages/Profile/components/UpdateProfile";
import SavedPlaylists from "./pages/Profile/components/SavedPlaylist";
import LikedVideos from "./pages/Profile/components/LikedVideos";
import Inbox from "./pages/Profile/components/Inbox";

function App() {
  return (
    <Router>
      <div>
        <nav className="mb-4">
          <Link to="/login" className="btn btn-primary me-2">
            Login
          </Link>
        </nav>
        <Routes>
          <Route path="/" element={<Navigate to="Home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login/*" element={<Login />} />
          <Route path="/profile/:username" element={<Profile />} />
          <Route path="/profile/:username/update" element={<UpdateProfile />} />
          <Route
            path="/profile/:username/saved-playlists"
            element={<SavedPlaylists />}
          />
          <Route
            path="/profile/:username/liked-videos"
            element={<LikedVideos />}
          />
          <Route path="/profile/:username/inbox" element={<Inbox />} />
          <Route path="/search" element={<Search />} />
          <Route path="/details/:did" element={<Details />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
