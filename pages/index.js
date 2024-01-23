// This component represents a login page with a form for users to input their email and password. 

import React, { useState } from "react";
import Image from "next/image";
import AdminHOC from "@/components/layout/admin.hoc";
import { useRouter } from "next/router"; // import using bulit-in nextjs router

// The Login component is a functional component that represents the login page for the website
export default function Login() {

// Next.js Router:
  /* The useRouter hook from Next.js is used to access the router object. 
  It provides methods for navigation, such as push for changing the URL programmatically. */
  const router = useRouter();

// State Initialization:
  // The component uses the useState hook to manage the state of the email and password input fields.
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

// Form Submission Handler:
  /* The handleSubmit function is triggered when the login form is submitted. 
  It prevents the default form submission behavior, sends a POST request to the "/api/loginAuthentication" endpoint with user credentials, and handles the response. 
  If the response is successful (status code 200), it navigates the user to the "/home" page using router.push. Otherwise, it shows an alert for invalid credentials.*/
  const handleSubmit = async (e) => {
    e.preventDefault();

    // calling the API using javasript fetch
    // Fetching login authentication API with user input
    try {
      const response = await fetch("/api/loginAuthentication", {
        method: "Post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const userData = await response.json();

        // Call the function to send user data to the server
        sendUserDataToServer(userData);

        // Navigate to the "/home" page
        router.push("/home");
      } else {
        alert("Invalid Email or Password");
      }
    } catch (error) {
      console.error("Error", error);
    }
  };

  const sendUserDataToServer = async (userData) => {
    try {
      const response = await fetch("/api/saveUserData", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      if (response.ok) {
        console.log("User data sent to the server successfully");
        // Optionally, handle the server response here
      } else {
        console.error("Failed to send user data to the server:", response.statusText);
      }
    } catch (error) {
      console.error("Error sending user data to the server:", error);
    }
  };

  return (
      <div className="hold-transition login-page">
        <div className="login-box">
          {/* /.login-logo */}
          <div className="card">
            <div className="card-body login-card-body">
              <p className="login-box-msg">Sign in to start your session</p>
              <form onSubmit={handleSubmit}>
                <div className="input-group mb-3">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <div className="input-group-append">
                    <div className="input-group-text">
                      <span className="fas fa-envelope" />
                    </div>
                  </div>
                </div>
                <div className="input-group mb-3">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <div className="input-group-append">
                    <div className="input-group-text">
                      <span className="fas fa-lock" />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-8">
                    <div className="icheck-primary">
                      <input type="checkbox" id="remember" />
                      <label htmlFor="remember">Remember Me</label>
                    </div>
                  </div>
                  {/* /.col */}
                  <div className="col-4">
                    <button
                      type="submit"
                      onClick={handleSubmit}
                      className="btn btn-primary btn-block"
                    >
                      Sign In
                    </button>
                  </div>
                  {/* /.col */}
                </div>
              </form>
              <div className="social-auth-links text-center mb-3">
                <p>- OR -</p>
                <a href="/" className="btn btn-block btn-primary">
                  <i className="fab fa-facebook mr-2" /> Sign in using Facebook
                </a>
                {/* <!-- Add this where you want the Google Sign-In button --> */}
              <div class="g-signin2" data-onsuccess="onSignIn">
                <a href="https://accounts.google.com/o/oauth2/auth?client_id=159004253172-lvtift0t6q21017qc3pqibtvr0pph999.apps.googleusercontent.com&redirect_uri=http://localhost:3000&response_type=code&scope=email" className="btn btn-block btn-danger">
                  <i className="fab fa-google-plus mr-2" /> Sign in using
                  Google+
                </a>
                
                </div>
              </div>
              {/* /.social-auth-links */}
              <p className="mb-1">
                <a href="forgot-password.html">I forgot my password</a>
              </p>
              <p className="mb-0">
                <a href="register.html" className="text-center">
                  Register a new membership
                </a>
              </p>
            </div>
            {/* /.login-card-body */}
          </div>
        </div>
      </div>
  );
}
