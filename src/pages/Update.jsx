import React, { useContext, useEffect } from "react";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../context/AuthProvide";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { updateMyFood } from "../Api/Api";

export default function Update() {
	const { user } = useContext(AuthContext);
    const naveigate = useNavigate()
	const res = useLoaderData();
	const {
		_id,
		email,
		foodName,
		foodImage,
		foodQuantity,
		pickupLocation,
		date,
		bio,
	} = res.data || [];

	const handleSubmit = async (e) => {
		e.preventDefault();
		const form = e.target;
		const foodName = form.foodName.value;
		const foodImage = form.foodImage.value;
		const foodQuantity = parseInt(form.foodQuantity.value);
		const expireDate = form.expireDate.value;
		const pickupLocation = form.pickupLocation.value;
		const aditionalInfo = form.aditionalInfo.value;
		const formData = {
			foodName,
			foodImage,
			foodQuantity,
			pickupLocation,
			expireDate,
			aditionalInfo,
		};

		try {
            const data =await updateMyFood(_id, formData);
            toast.success("update Success")
            naveigate("/manageMyFoods")
        } catch (error) {
            toast.error("error.message")
        }
        
       
	};
	return (
		<form className="card-body w-full" onSubmit={handleSubmit}>
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
						defaultValue={foodName}
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
						defaultValue={foodImage}
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
						defaultValue={foodQuantity}
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
						defaultValue={pickupLocation}
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
						name="expireDate"
						defaultValue={date}
					/>
				</div>
				<div className="form-control">
					<label className="label">
						<span className="label-text">Addination Info</span>
					</label>
					<textarea
						placeholder="Addination Info"
						className="textarea textarea-bordered textarea-xs w-full max-w-md"
						name="aditionalInfo"
						defaultValue={bio}
					></textarea>
				</div>
			</div>
			<div className="form-control mt-6">
				<button className="btn btn-primary">Update</button>
			</div>
		</form>
	);
}
