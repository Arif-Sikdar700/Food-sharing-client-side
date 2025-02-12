import React from "react";
import { compareAsc, format } from "date-fns";
import { Link } from "react-router-dom";
import UseAuth from "../hooks/UseAuth";

export default function AllFoodCard({ curData }) {
	
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
	} = curData;
	
	return (
		<div className="card my-5 max-w-md card-compact  shadow-xl">
			<figure className="h-48 object-cover">
				<img src={foodImage} alt={foodName} className="w-full h-full" />
			</figure>
			<div className="card-body">
				<h2 className="card-title"> {foodName}</h2>
				<div className="grid grid-cols-2 gap-4">
					<p>
						<b>bio : </b>
						{bio}
					</p>
					<p>
						<b>foodQuantity</b> : {foodQuantity}
					</p>
					<p>
						<b>pickupLocation</b> : {pickupLocation}
					</p>
					<p>
						<b>status</b> : {status}
					</p>
					<p>
						<b>Expired Date</b> : {format(new Date(date), "yyyy-MM-dd")}
					</p>
				</div>
				<div className="card-actions justify-center">
					<button className="btn btn-primary">
						<Link to={`/foodDetails/${_id}`}>Food Details</Link>
					</button>
				</div>
			</div>
		</div>
	);
}
