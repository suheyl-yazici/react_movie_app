import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signIn } from "../auth/firebase";


const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate= useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    signIn(email,password,navigate);
    console.log(email,password);
  }

  return (
    <div className="d-flex justify-content-center">
    <div className="form-image">
      <img src="https://picsum.photos/800/800" alt="sample-movie" />
    </div>
  <div className="register-form">
    <h1 className="form-title display-3">Login</h1>
      <form id="register" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email-name" className="form-label">Email</label>
            <input type="text" className="form-control" id="email-name" placeholder="Enter your email.." onChange={(e) => setEmail(e.target.value)} required/>
        </div>
          <div className="mb-3">
            <label htmlFor="password-name" className="form-label">Password</label>
            <input type="password" className="form-control" id="password-name" placeholder="Enter your password.." onChange={(e) => setPassword(e.target.value)} required/>
        </div>
        <input type="submit" className="btn btn-primary form-control" value="Login" />
        </form>
        <button className="btn btn-primary form-control">Continue with Google</button>
        </div>
    </div>
  )
}

export default Login