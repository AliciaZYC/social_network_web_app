import React, { useState } from "react";
import {
  FaSearch,
  FaUserCircle,
  FaEyeSlash,
  FaSun,
  FaMoon,
} from "react-icons/fa"; // 引入React Icons

const TopNavBar: React.FC = () => {
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
      <h3 className="mb-0">name of our app</h3>

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

      {/* 右侧：三个功能图标 */}
      <div className="d-flex align-items-center">
        {/* 隐藏模式 */}
        <button className="btn btn-outline-secondary me-3">
          <FaEyeSlash />
        </button>
        {/* 用户头像 */}
        <button className="btn btn-outline-secondary me-3">
          <FaUserCircle />
        </button>
        {/* 切换暗/亮模式 */}
        <button className="btn btn-outline-secondary" onClick={toggleDarkMode}>
          {darkMode ? <FaSun /> : <FaMoon />}
        </button>
      </div>
    </div>
  );
};

export default TopNavBar;
