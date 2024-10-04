import React from "react";
import { Link } from "react-router-dom";
import {
  FaHome,
  FaInfoCircle,
  FaChalkboardTeacher,
  FaBook,
  FaEnvelope,
} from "react-icons/fa";

const NavBar: React.FC = () => {
  return (
    <div className="navbar-container">
      {/* 用户信息部分 */}
      <div className="text-center">
        <img
          src="https://via.placeholder.com/100"
          className="rounded-circle mb-3"
          alt="User Avatar"
        />
        <h5 className="mb-0">Yichi Zhang</h5>
        <p className="text-muted">Student</p>
        <Link to="/profile/yichi" className="btn btn-primary mb-4">
          View Profile
        </Link>
      </div>

      {/* 导航链接部分 */}
      <div className="d-flex flex-column">
        <Link to="/" className="nav-link d-flex align-items-center mb-3">
          <FaHome className="me-2" />
          <span>Home</span>
        </Link>
        <Link to="/about" className="nav-link d-flex align-items-center mb-3">
          <FaInfoCircle className="me-2" />
          <span>About</span>
        </Link>
        <Link
          to="/teachers"
          className="nav-link d-flex align-items-center mb-3"
        >
          <FaChalkboardTeacher className="me-2" />
          <span>Teachers</span>
        </Link>
        <Link to="/Courses/index.tsx" className="nav-link d-flex align-items-center mb-3">
          <FaBook className="me-2" />
          <span>Courses</span>
        </Link>
        <Link to="/contact" className="nav-link d-flex align-items-center mb-3">
          <FaEnvelope className="me-2" />
          <span>Contact Us</span>
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
