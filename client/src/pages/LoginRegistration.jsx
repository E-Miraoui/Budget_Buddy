import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { IoLockClosedOutline } from "react-icons/io5";
import { IoIosMail } from "react-icons/io";

const LoginRegistration = () => {

  const navigate = useNavigate();
  const [action, setAction] = useState("");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const registerLink = () => {
    setAction("active");
  };

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("http://localhost:8080/api/v1/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        const errorMessage = data.message || "Invalid credentials";
        alert(errorMessage);
        return;
      }

      const userId = data.userId; // Accessing userId directly from data object
      navigate(`/dashboard/${userId}`);
    } catch (error) {
      console.log(error || "Invalid credentials");
    }
  };

  const LoginLink = () => {
    setAction("");
  };

  return (
    <div className="page">
      <div className={`wrapper ${action}`}>
        <div className="form-box login">
          <form action="">
            <h1> Login</h1>
            <div className="input-box">
              <input
                type="text"
                placeholder="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <FaUser className="icon" />
            </div>
            <div className="input-box">
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />

              <IoLockClosedOutline className="icon" />
            </div>
            <div className="remember-forgot">
              <label>
                <input type="checkbox" /> Remember me
              </label>
              <a href="#">Forgot password?</a>
            </div>
            <button type="submit" onClick={handleLogin}>
              Login
            </button>
            <div className="register-link">
              <p>
                Don't have an account yet ?{" "}
                <a href="#" onClick={registerLink}>
                  Sign up
                </a>
              </p>
            </div>
          </form>
        </div>

        <div className="form-box register">
          <form action="">
            <h1> Registration</h1>
            <div className="input-box">
              <input type="text" placeholder="username" required />
              <FaUser className="icon" />
            </div>
            <div className="input-box">
              <input type="email" placeholder="email" required />
              <IoIosMail className="icon" />
            </div>
            <div className="input-box">
              <input type="password" placeholder="Password" required />
              <IoLockClosedOutline className="icon" />
            </div>
            <div className="remember-forgot">
              <label>
                <input type="checkbox" /> I agree to the temrs of utilisation
              </label>
            </div>
            <button type="submit">Register</button>
            <div className="register-link">
              <p>
                Already have an account yet ?{" "}
                <a href="#" onClick={LoginLink}>
                  Log in
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginRegistration;
