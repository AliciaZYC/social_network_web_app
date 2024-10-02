import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const SigninForm = () => {
  const [username, setUsername] = useState("");
  const navigate = useNavigate(); // 用于页面跳转

  const handleSignin = (e: React.FormEvent) => {
    e.preventDefault();
    // 模拟登录逻辑，处理完之后跳转到用户的个人信息页面
    navigate(`/profile/${username}`); // 跳转到个人信息页面，URL 区分用户
  };

  return (
    <div className="container mt-5">
      <p>maybe putting a logo here</p>
      <h3 className="login-page-title">Login to your account</h3>
      <p className="login-page-txt-sm">Welcome back</p>
      <form onSubmit={handleSignin}>
        <div className="mb-3">
          <label htmlFor="sn-username" className="form-label login-page-label">
            Username
          </label>
          <input
            type="text"
            className="form-control"
            id="sn-username"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
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
        <button className="btn btn-primary w-100 login-button" type="submit">
          Sign in
        </button>
      </form>
      <p className="login-page-txt-sm mt-3">
        Don't have an account?{" "}
        <Link id="login-page-link" to="/Login/Signup">
          Sign up
        </Link>
      </p>
    </div>
  );
};

export default SigninForm;
