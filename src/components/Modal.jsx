import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthProvide";
import { format } from "date-fns";
import toast from "react-hot-toast";
import { useMutation } from "@tanstack/react-query";
import { myFoodRequest } from "../Api/Api";
import { Bounce } from "react-toastify";

export default function Modal({ data }) {
	const { user } = useContext(AuthContext);
	const {
		_id,
		displayName,
		email,
		photoURL,
		status,
		foodName,
		foodImage,
		foodQuantity,
		pickupLocation,
		date,
		bio,
	} = data || [];

	const { mutateAsync } = useMutation({ mutationFn: myFoodRequest });
	const handleSubmit = async (e) => {
		e.preventDefault();
		const form = e.target;
		const foodName = form.foodName.value;
		const foodImage = form.foodImage.value;
		const foodId = form.foodId.value;
		const foodQuantity = parseInt(form.foodQuantity.value);
		const userEmail = form.userEmail.value;
		const currentDate = form.requestDate.value;
		const expireDate = form.expireDate.value;
		const pickupLocation = form.pickupLocation.value;
		const aditionalInfo = form.aditionalInfo.value;
		const formData = {
			foodName,
			foodImage,
			foodId,
			foodQuantity,
			userEmail,
			currentDate,
			pickupLocation,
			expireDate,
			aditionalInfo,
			buyer: {
				displayName,
				email,
				photoURL,
			
			},
			status: data.status == "available" ? "requested" : "",
		};
       

		try {
			const data = await mutateAsync(formData);
			document.getElementById("my_modal_5").close();
			toast.success("Success");
		} catch (error) {
			toast.error(error.message);
		}
	};
	return (
		<div>
			{data === null ? (
				<div>loading...</div>
			) : (
				<dialog
					id="my_modal_5"
					className="modal  modal-bottom sm:modal-middle "
				>
					<div className="modal-box max-w-0 w-full min-w-[1000px] ">
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
										disabled
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
										disabled
									/>
								</div>
								<div className="form-control">
									<label className="label">
										<span className="label-text">Food Id</span>
									</label>
									<input
										type="text"
										placeholder="Food Id"
										className="input input-bordered"
										required
										name="foodId"
										defaultValue={_id}
										disabled
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
										disabled
									/>
								</div>

								<div className="form-control">
									<label className="label">
										<span className="label-text">User email</span>
									</label>
									<input
										type="text"
										placeholder="Food Donator Name"
										className="input input-bordered"
										required
										name="userEmail"
										defaultValue={user?.email}
										disabled
									/>
								</div>
								<div className="form-control">
									<label className="label">
										<span className="label-text">Request Date</span>
									</label>
									<input
										type="text"
										placeholder="Request Date"
										className="input input-bordered"
										required
										name="requestDate"
										defaultValue={format(new Date(), "dd-MM-yyyy", {
											timeZone: "Asia/Dhaka",
										})}
										disabled
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
										disabled
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
										value={date}
										disabled
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
								<button className="btn btn-primary">Request Submit</button>
							</div>
						</form>
					</div>
				</dialog>
			)}
		</div>
	);
}
