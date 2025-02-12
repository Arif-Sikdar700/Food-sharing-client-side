import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthProvide";
import { foodAdd } from "../Api/Api";
import Swal from "sweetalert2";

export default function AddFoodForm() {
	const { user } = useContext(AuthContext);
	const handleSubmit = async (e) => {
		e.preventDefault();
		const formData = new FormData(e.target);
		let data = {};

		
		for (const [key, value] of formData) {
			data[key] = value;
		}
		let formsObj = {
			displayName: user?.displayName,
			email: user?.email,
			photoURL: user?.photoURL,
			status: "available",
			...data,
			foodQuantity: parseInt(data.foodQuantity),
		};

		await foodAdd(formsObj)
			.then((result) => {
				Swal.fire({
					title: "Good job!",
					text: "Food Add!",
					icon: "success",
				});
		        e.target.reset()
			})
			.catch((err) => {
		        Swal.fire({
					title: "Bad!",
					text: err.message,
					icon: "error",
				});
		    });
	};
	return (
		<div className="hero bg-base-200 min-h-screen">
			<div className="hero-content w-3/4 flex-col lg:flex-row-reverse">
				<div className="card bg-base-100 w-full shadow-2xl">
					<h1 className="text-3xl my-4 text-center font-extrabold">
						Add Food!
					</h1>
					<form className="card-body" onSubmit={handleSubmit}>
						<div className="grid grid-cols-2 gap-3">
							<div className="form-control">
								<label className="label">
									<span className="label-text ">Food Name :</span>
								</label>
								<input
									type="text"
									placeholder="Food Name"
									className="input input-bordered"
									required
									name="foodName"
								/>
							</div>
							<div className="form-control">
								<label className="label">
									<span className="label-text">Food Image</span>
								</label>
								<input
									type="url"
									placeholder="Food Image"
									className="input input-bordered"
									required
									name="foodImage"
								/>
							</div>
							<div className="form-control">
								<label className="label">
									<span className="label-text">Food Quantity</span>
								</label>
								<input
									type="number"
									placeholder="Food Quantity"
									className="input input-bordered"
									required
									name="foodQuantity"
								/>
							</div>
							<div className="form-control">
								<label className="label">
									<span className="label-text">Pickup Location</span>
								</label>
								<input
									type="text"
									placeholder="Pickup Location"
									className="input input-bordered"
									required
									name="pickupLocation"
								/>
							</div>
							<div className="form-control">
								<label className="label">
									<span className="label-text">Expired Date/Time</span>
								</label>
								<input
									type="date"
									placeholder="Expired Date/Time"
									className="input input-bordered"
									required
									name="date"
								/>
							</div>
							<div className="form-control">
								<label className="label">
									<span className="label-text">Addination Info</span>
								</label>
								<textarea
									placeholder="Addination Info"
									className="textarea textarea-bordered textarea-xs w-full max-w-md"
									name="bio"
								></textarea>
							</div>
						</div>
						<div className="form-control mt-6">
							<button className="btn btn-primary">Add Food</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}
