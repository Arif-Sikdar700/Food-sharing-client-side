import React, { useContext, useEffect, useState } from "react";

import toast from "react-hot-toast";
import { AuthContext } from "../context/AuthProvide";
import UseAxios from "../Api/Api";


export default function MyFoodRequest() {
	const { user } = useContext(AuthContext);
	const [data, setData] = useState(null);
	const instance = UseAxios()
	const getMyFood = (email) => {
		return instance.get(`/myfood/${email}`);
	};
	const getData = async () => {
		try {
			const res = await getMyFood(user.email);

			setData(res.data);
		} catch (error) {
			toast.error(error.message);
		}
	};

	useEffect(() => {
		getData();
	}, []);
	return (
		<div className="overflow-x-auto my-6">
			<table className="table">
				{/* head */}
				<thead>
					<tr>
						<th>Donar Name</th>
						<th>Pickup Location</th>
						<th>Expire Date</th>
						<th>Request Date</th>
					</tr>
				</thead>
				<tbody>
					{data?.map((curData) => {
						return (
							<tr key={curData._id}>
								<th>{curData.buyer.displayName}</th>
								<td>{curData.pickupLocation}</td>
								<td>{curData.expireDate}</td>
								<td>{curData.currentDate}</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
}
