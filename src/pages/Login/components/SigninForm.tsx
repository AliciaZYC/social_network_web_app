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
    <div
      className="d-flex justify-content-center align-items-center"
      // style={{ minHeight: "100vh" }}
    >
      <div className="container" style={{ maxWidth: "400px" }}>
        <p className="text-center">
          <img
            src="/images/logo.png"
            alt="Logo"
            style={{ maxWidth: "50%", height: "50%" }}
          />
        </p>
        <h3 className="login-page-title text-center">Login to your account</h3>
        <p className="login-page-txt-sm text-center">Welcome back</p>
        <form onSubmit={handleSignin}>
          <div className="mb-3">
            <label
              htmlFor="sn-username"
              className="form-label login-page-label"
            >
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
            <label
              htmlFor="sn-password"
              className="form-label login-page-label"
            >
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
        <p className="login-page-txt-sm mt-3 text-center">
          Don't have an account?{" "}
          <Link id="login-page-link" to="/Login/Signup">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SigninForm;
