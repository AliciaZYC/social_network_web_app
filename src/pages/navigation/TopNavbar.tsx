import React, { useState } from "react";
import {
  FaSearch,
  FaUserCircle,
  FaEyeSlash,
  FaSun,
  FaMoon,
} from "react-icons/fa"; // 引入React Icons
import { Link, useNavigate } from "react-router-dom";

const TopNavBar: React.FC = () => {
  const [showProfileCard, setShowProfileCard] = useState(false); // 控制卡片显示状态
  const navigate = useNavigate(); // 用于跳转

  const toggleProfileCard = () => {
    setShowProfileCard(!showProfileCard); // 切换卡片显示状态
  };

  const handleLogout = () => {
    // 模拟登出逻辑
    navigate("/login"); // 跳转到登录页面
  };

  const [darkMode, setDarkMode] = useState(false); // 用于控制暗/亮模式

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    // 这里你可以根据 darkMode 的状态设置全局的 CSS 类来切换模式
    document.body.classList.toggle("dark-mode", !darkMode);
  };

  return (
    <div
      className="top-navbar d-flex align-items-center justify-content-between px-4 py-2"
      style={{ backgroundColor: "#f8f9fa", borderBottom: "1px solid #dee2e6" }}
    >
      {/* 左侧：应用名称 */}
      <p className="d-flex align-items-center">
        <Link to="/" className="d-flex align-items-center">
          <img
            src="/images/logo-text.jpg"
            alt="Logo"
            style={{ maxWidth: "200px", height: "auto" }}
          />
        </Link>
      </p>

      {/* 中间：搜索框和按钮 */}
      <div className="d-flex align-items-center">
        <input
          type="text"
          className="form-control"
          placeholder="Search courses"
          style={{ width: "300px", marginRight: "10px" }}
        />
        <button className="btn btn-outline-secondary">
          <FaSearch />
        </button>
      </div>

      {/* 右侧：功能图标 */}
      <div className="d-flex align-items-center">
        {/* 用户头像按钮 */}
        {/* 隐藏模式 */}
        <button className="btn btn-outline-secondary me-3">
          <FaEyeSlash />
        </button>
        <div className="position-relative">
          <button
            className="btn btn-outline-secondary me-3"
            onClick={toggleProfileCard}
          >
            <FaUserCircle />
          </button>

          {/* 卡片显示：头像、用户名、身份、查看资料、登出 */}
          {showProfileCard && (
            <div
              className="card position-absolute"
              style={{ top: "100%", right: 0, width: "200px", zIndex: 1000 }}
            >
              <div className="card-body text-center">
                <img
                  src="https://via.placeholder.com/80"
                  className="rounded-circle mb-3"
                  alt="User Avatar"
                />
                <h6 className="card-title">Yichi Zhang</h6>
                <p className="text-muted">Student</p>
                <Link
                  to="/profile/yichi"
                  className="btn btn-primary btn-sm mb-2 w-100"
                >
                  View Profile
                </Link>
                <button
                  className="btn btn-danger btn-sm w-100"
                  onClick={handleLogout}
                >
                  Log Out
                </button>
              </div>
            </div>
          )}
        </div>
        {/* 切换暗/亮模式 */}
        <button className="btn btn-outline-secondary" onClick={toggleDarkMode}>
          {darkMode ? <FaSun /> : <FaMoon />}
        </button>
      </div>
    </div>
  );
};

export default TopNavBar;
