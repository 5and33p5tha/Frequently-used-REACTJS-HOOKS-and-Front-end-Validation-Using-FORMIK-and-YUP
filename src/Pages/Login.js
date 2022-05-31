import React from "react";
import { Link } from "react-router-dom";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

const Login = () => {
  //Login i.e. SignIn Page
  //The Login Page Here Is SignIn Page
  return (
    <>
      {/* <div className='container-sm'> THIS WILL CREATE SMALL CONTAINER(NOT CONTAINER IN SMALL SCREEN BUT SMAL CONTAINER) */}
      {/* CHECK BOOTSTRAP DOCUMENTS FOR MORE DETAILS
            BOOTSTRAP DOCUMENTATION:- https://getbootstrap.com/docs/5.1/layout/containers/ */}

      <Navbar />

      {/* <h1>HELLO, THIS IS LOGIN PAGE</h1> */}

      {/* In React,
            class = className
            <a> </a> = <Link to></Link>
            for = htmlFor i.e label for = label htmlFor */}

      <div className="container w-50 mx-auto mt-5">
        <div className="text-center">
          <main className="form-signin">
            <form>
              <div className="text-center">
                <img
                  className="mb-4"
                  src="./logo192.png"
                  alt=""
                  width="72"
                  height="57"
                />
                <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
              </div>
              <div className="form-floating">
                <input
                  type="email"
                  className="form-control"
                  id="floatingInput"
                  placeholder="name@example.com"
                />

                {/* SINCE FORM CONTROL PUTS THE LABEL IN PLACE OF PLACEHOLDER I.E INSIDE THE BOX, THE PLACEHOLDER WILL NOT WORK HERE */}

                <label htmlFor="floatingInput">Email address</label>
              </div>
              <div className="form-floating">
                <input
                  type="password"
                  className="form-control"
                  id="floatingPassword"
                  placeholder="Password"
                />
                <label htmlFor="floatingPassword">Password</label>
              </div>
              <div className="checkbox mb-3">
                <label>
                  <input type="checkbox" value="remember-me" /> Remember me
                </label>
              </div>
              <button className="w-100 btn btn-lg btn-primary" type="submit">
                Sign in
              </button>
              <br></br>
              <br />
              Don`t have an account? <Link to="/Signup">Register Here</Link>
              <p className="mt-5 mb-3 text-muted">&copy; 2017–2021</p>
            </form>
          </main>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Login;
