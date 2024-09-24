import { Link } from "react-router-dom";
const SigninForm = () => {
  return (
    <div>
      <p>maybe putting a logo here</p>
      <h3 className="login-page-title">Login to your account</h3>
      <p className="login-page-txt-sm">Welcome back</p>
      <div className="login-page-form">
        <label className="login-page-label">Email</label>
        <input id="sn-email" placeholder="username@email.com" /> <br />
        <label className="login-page-label">Password</label>
        <input id="sn-password" placeholder="password" type="password" /> <br />
      </div>
      <button className="login-button">Sign in</button>
      <p className="login-page-txt-sm">
        Don't have an account?
        <Link id="login-page-link" to="/Login/Signup">
          Sign up
        </Link>
      </p>
    </div>
  );
};
export default SigninForm;
