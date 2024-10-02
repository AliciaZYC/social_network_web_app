import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const SignupForm = () => {
  const [role, setRole] = useState("student"); // 默认角色
  const navigate = useNavigate(); // 用于页面跳转

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    // 模拟注册逻辑，处理完之后跳转到登录页面
    navigate("/Login/Signin"); // 跳转到登录页面
  };

  return (
    <div className="container mt-5">
      <p>maybe putting a logo here</p>
      <h3 className="login-page-title">Create a new account</h3>
      <p className="login-page-txt-sm">
        Sign up to explore "TODO: name of our app"
      </p>
      <form onSubmit={handleSignup}>
        <div className="mb-3">
          <label htmlFor="sn-name" className="form-label login-page-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="sn-name"
            placeholder="Name"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="sn-username" className="form-label login-page-label">
            Username
          </label>
          <input
            type="text"
            className="form-control"
            id="sn-username"
            placeholder="Username"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="sn-email" className="form-label login-page-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="sn-email"
            placeholder="username@email.com"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="sn-password" className="form-label login-page-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="sn-password"
            placeholder="Password"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="role-select" className="form-label login-page-label">
            Role
          </label>
          <select
            id="role-select"
            className="form-select"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            <option value="student">Student</option>
            <option value="teacher">Teacher</option>
          </select>
        </div>
        <button className="btn btn-primary w-100 login-button" type="submit">
          Sign up
        </button>
      </form>
      <p className="login-page-txt-sm mt-3">
        Already have an account?{" "}
        <Link id="login-page-link" to="/Login/Signin">
          Sign in
        </Link>
      </p>
    </div>
  );
};

export default SignupForm;
