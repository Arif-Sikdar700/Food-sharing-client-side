import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthProvide";
import { Result } from "postcss";
import Swal from "sweetalert2";
import toast from "react-hot-toast";

export default function Login() {
  const navigate = useNavigate();
  const { UserLogin, UserGoogle, userGitHub } = useContext(AuthContext);
  const handleSubmit = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    UserLogin(email, password)
      .then((result) => {
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "Login Succesful!",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/");
      })
      .catch((err) => {
        Swal.fire({
          position: "top-center",
          icon: "error",
          title: err.message,
          showConfirmButton: false,
          timer: 1500,
        });
      });
  };
  const googleLogin = () => {
    UserGoogle()
      .then((result) => {
        toast.success("Login Success");
        navigate("/");
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };
  const githubLogin = () => {
    userGitHub()
      .then((result) => {
        toast.success("Login Success");
        navigate("/");
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content w-1/3 flex-col lg:flex-row-reverse">
        <div className="card bg-base-100 w-full   shadow-2xl">
          <h1 className="text-2xl font-bold mt-4 text-center">
            Login Your Account?
          </h1>
          <form className="card-body" onSubmit={handleSubmit}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                name="email"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                name="password"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
          <div className="flex flex-col  items-center gap-2 mx-7">
            <button
              onClick={() => googleLogin()}
              className="btn w-full text-white bg-[#4A00FF] "
            >
              Google
            </button>
            <button
              onClick={() => githubLogin()}
              className="btn w-full text-white bg-[#4A00FF] "
            >
              Github
            </button>
          </div>
          <p className="text-center my-3">
            New User?
            <span className="text-[#4A00FF] ">
              <Link to={"/register"}> Register</Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
