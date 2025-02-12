import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthProvide";
import { Bounce, toast } from "react-toastify";
import Swal from "sweetalert2";


export default function Register() {
    const navigate =useNavigate()
	const {UserRegister,userUpdateProfile} = useContext(AuthContext);

	const handleSubmit = (e) => {
		e.preventDefault();
		
		const name = e.target.name.value
		const photoUrl = e.target.photoUrl.value
		const email = e.target.email.value
		const password = e.target.password.value
		
		const regex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
		if (!regex.test(password)) {
			toast.warn(
				"Must have an Uppercase letter & Lowercase & Length  least 6 character  ",
				{
					position: "top-center",
					autoClose: 2000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
					theme: "light",
					transition: Bounce,
				}
			);

			return;
		}
        
        UserRegister(email,password,photoUrl,name)
        .then(result=>{
            userUpdateProfile({displayName:name, photoURL:photoUrl})
            .then(data=> {
               
            })
            .catch(err=>{
				toast.error("err.message")
			})
            Swal.fire({
                position: "top-center",
                icon: "success",
                title: "Register Succefull",
                showConfirmButton: false,
                timer: 1500
              });
              navigate("/")
            
        })
        .catch(err=>{
            
            Swal.fire({
                position: "top-center",
                icon: "success",
                title: err.message,
                showConfirmButton: false,
                timer: 1500
              });
             
        })
        e.target.reset()
	};
	return (
		<div className="hero bg-base-200 min-h-screen">
			<div className="hero-content w-1/3 flex-col lg:flex-row-reverse">
				<div className="card bg-base-100 w-full   shadow-2xl">
					<form className="card-body" onSubmit={handleSubmit}>
						<div className="form-control">
							<label className="label">
								<span className="label-text">Name</span>
							</label>
							<input
								type="text"
								placeholder="Name"
								className="input input-bordered"
								required
								name="name"
							/>
						</div>
						<div className="form-control">
							<label className="label">
								<span className="label-text">PhotoUrl</span>
							</label>
							<input
								type="url"
								placeholder="Photo"
								className="input input-bordered"
								required
								name="photoUrl"
							/>
						</div>
						<div className="form-control">
							<label className="label">
								<span className="label-text">Email</span>
							</label>
							<input
								type="email"
								placeholder="email"
								className="input input-bordered"
								required
								name="email"
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
								required
								name="password"
							/>
						</div>
						<div className="form-control mt-6">
							<button className="btn btn-primary">Login</button>
						</div>
						<p className="text-center">
							Already Have Account?
							<span className="text-[#4A00FF]">
								<Link to={"/login"}> Login</Link>
							</span>
						</p>
					</form>
				</div>
			</div>
		</div>
	);
}
