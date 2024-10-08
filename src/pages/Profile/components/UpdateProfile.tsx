import React from "react";
import { FaCamera } from "react-icons/fa"; // Importing camera icon for avatar button
import "../Profile.css";

const UpdateProfile: React.FC = () => {
  return (
    <div className="container mt-5" style={{ maxWidth: "600px" }}>
      <h3 className="text-center mb-4">Update Profile</h3>
      <form>
        {/* Avatar Section */}
        <div className="mb-4 d-flex flex-column align-items-center">
          <img
            src="https://via.placeholder.com/150"
            alt="Profile Avatar"
            className="rounded-circle shadow-sm mb-3"
            style={{ width: "120px", height: "120px", objectFit: "cover" }}
          />
          <button type="button" className="btn btn-outline-secondary btn-sm">
            <FaCamera className="me-2" />
            Change Avatar
          </button>
        </div>

        {/* Username (Read-only) */}
        <div className="mb-3">
          <label htmlFor="username" className="form-label fw-bold">
            Username
          </label>
          <input
            type="text"
            className="form-control"
            id="username"
            value="exampleUser"
            readOnly
          />
        </div>

        {/* Email (Read-only) */}
        <div className="mb-3">
          <label htmlFor="email" className="form-label fw-bold">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            value="user@example.com"
            readOnly
          />
        </div>

        {/* Current Password */}
        <div className="mb-3">
          <label htmlFor="currentPassword" className="form-label fw-bold">
            Current Password
          </label>
          <input
            type="password"
            className="form-control"
            id="currentPassword"
            placeholder="Enter current password"
          />
        </div>

        {/* New Password */}
        <div className="mb-3">
          <label htmlFor="newPassword" className="form-label fw-bold">
            New Password
          </label>
          <input
            type="password"
            className="form-control"
            id="newPassword"
            placeholder="Enter new password"
          />
        </div>

        {/* Confirm New Password */}
        <div className="mb-3">
          <label htmlFor="confirmPassword" className="form-label fw-bold">
            Confirm New Password
          </label>
          <input
            type="password"
            className="form-control"
            id="confirmPassword"
            placeholder="Confirm new password"
          />
        </div>

        {/* Self Introduction */}
        <div className="mb-4">
          <label htmlFor="selfIntro" className="form-label fw-bold">
            Self Introduction
          </label>
          <textarea
            className="form-control"
            id="selfIntro"
            rows={3}
            placeholder="Write something about yourself"
          ></textarea>
        </div>

        {/* Update Profile Button */}
        <button type="button" className="btn btn-purple w-100 shadow-sm">
          Update Profile
        </button>
      </form>
    </div>
  );
};

export default UpdateProfile;
