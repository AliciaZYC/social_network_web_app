import { Link } from "react-router-dom";
const SignupForm = () => {
  return (
    <div>
      <p>maybe putting a logo here</p>
      <h3 className="login-page-title">Create a new account</h3>
      <p className="login-page-txt-sm">
        Sign up to explore "TODO:name of our app"
      </p>
      <div className="login-page-form">
        <label className="login-page-label">Name</label>
        <input id="sn-name" placeholder="Name" /> <br />
        <label className="login-page-label">Username</label>
        <input id="sn-username" placeholder="Username" /> <br />
        <label className="login-page-label">Email</label>
        <input id="sn-email" placeholder="username@email.com" /> <br />
        <label className="login-page-label">Password</label>
        <input id="sn-password" placeholder="password" type="password" /> <br />
      </div>
      <button className="login-button">Sign up</button>
      <p className="login-page-txt-sm">
        Already have an account?
        <Link id="login-page-link" to="/Login/Signin">
          Sign in
        </Link>
      </p>
    </div>
  );
};
export default SignupForm;
