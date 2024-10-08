import React from "react";
import { Link, useParams } from "react-router-dom";
import { FaBookmark, FaHeart, FaComment } from "react-icons/fa"; // Importing icons
import "./Profile.css";

const Profile = () => {
  const { username } = useParams(); // Get username from URL params
  const role = "student"; // Assuming role is student

  return (
    <div className="container mt-5 text-center">
      <h3 className="mb-4">Your Profile</h3>

      {/* Personal Information Section */}
      <div className="card mx-auto mb-4" style={{ maxWidth: "18rem" }}>
        <div className="card-body text-center">
          <img
            src="https://via.placeholder.com/150"
            className="rounded-circle mb-3"
            alt="User Avatar"
            style={{ width: "100px", height: "100px" }}
          />
          <h5 className="card-title">{username}</h5>
          <p className="text-muted">{role}</p>
          <Link
            to={`/profile/${username}/update`}
            className="btn btn-purple mb-3"
          >
            Update Profile
          </Link>
        </div>
      </div>

      {/* Action Buttons Section */}
      <div className="d-flex justify-content-around mt-4">
        <div className="card action-card text-center">
          <FaBookmark className="icon" />
          <h4 className="mb-1">4</h4>
          <p className="text-muted">Saved Playlists</p>
          <Link
            to={`/profile/${username}/saved-playlists`}
            className="btn btn-purple"
          >
            View Playlists
          </Link>
        </div>

        <div className="card action-card text-center">
          <FaHeart className="icon" />
          <h4 className="mb-1">33</h4>
          <p className="text-muted">Videos Liked</p>
          <Link
            to={`/profile/${username}/liked-videos`}
            className="btn btn-purple"
          >
            View Liked
          </Link>
        </div>

        <div className="card action-card text-center">
          <FaComment className="icon" />
          <h4 className="mb-1">12</h4>
          <p className="text-muted">Videos Comments</p>
          <Link to={`/profile/${username}/inbox`} className="btn btn-purple">
            View Comments
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Profile;
