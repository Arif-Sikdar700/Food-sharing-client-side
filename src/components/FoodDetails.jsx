import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";

import { useEffect } from "react";
import { getSingleData } from "../Api/Api";
import Modal from "./Modal";
import { AuthContext } from "../context/AuthProvide";
import { Bounce, toast } from "react-toastify";

export default function FoodDetails() {
	const { user } = useContext(AuthContext);
	const { id } = useParams();
	const [data, setData] = useState(null);
	const singleData = async () => {
		const res = await getSingleData(id);
		setData(res.data);
	};
	useEffect(() => {
		singleData();
	}, []);
	const handleRequest = () => {
		if (data.email === user.email) {
			return toast.error("Action Not Permitted", {
				position: "top-center",
				autoClose: 500,
				hideProgressBar: false,
				closeOnClick: false,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: "light",
				transition: Bounce,
			});
		}

		document.getElementById("my_modal_5").showModal();
	};
	
	return (
		<div>
			{data === null ? <div>Loading...</div> :(
				<div className="grid grid-cols-1 md:grid-cols-3">
					<div className="card my-5 card-compact  shadow-xl">
						<figure className="h-48 object-cover">
							<img
								src={data?.foodImage}
								alt={data?.foodName}
								className="w-full h-full"
							/>
						</figure>
						<div className="card-body">
							<h2 className="card-title"> {data?.foodName}</h2>

							<div className="grid grid-cols-2 gap-4">
								<p>
									<b>foodQuantity</b> : {data?.foodQuantity}
								</p>
								<p>
									<b>Food Donator Email</b> : {data?.email}
								</p>
								<p>
									<b>Food Donator Name</b> : {data?.displayName}
								</p>

								<p>
									<b>pickupLocation</b> : {data?.pickupLocation}
								</p>
								<p>
									<b>status</b> : {data?.status}
								</p>
								<p>
									<b>date</b> : {data?.date}
								</p>
								<p>
									<b>Aditional Information</b> : {data?.bio}
								</p>
							</div>

							<div className="card-actions justify-center">
								<button className="btn btn-primary" onClick={handleRequest}>
									Order Request
								</button>
							</div>
						</div>
					</div>
					<Modal data={data} />
				</div>
			)}
		</div>
	);
}

