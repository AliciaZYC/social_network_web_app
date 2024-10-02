import { Routes, Route, Navigate } from "react-router";
import SigninForm from "./components/SigninForm";
import SignupForm from "./components/SignupForm";

export default function Login() {
  return (
    <div>
      {/* <h1>Login</h1>
      <h3>Welcome to login page</h3> */}
      <Routes>
        <Route path="/" element={<Navigate to="/Login/Signin" />} />
        <Route path="/Signin" element={<SigninForm />} />
        <Route path="/Signup" element={<SignupForm />} />
      </Routes>
    </div>
  );
}
