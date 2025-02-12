import React, { useContext, useEffect, useState } from "react";
import { deleteMyFood, getMyAddFood } from "../Api/Api";
import { MdDelete } from "react-icons/md";
import { RxUpdate } from "react-icons/rx";
import { AuthContext } from "../context/AuthProvide";
import { Link } from "react-router-dom";

export default function ManageMyFoods() {
	const { user } = useContext(AuthContext);
	const [data, setData] = useState(null);
	const handleDelete = async (id) => {
		const res = await deleteMyFood(id);

		const filterData = data.filter(curDatas => curDatas._id !== id)
		setData(filterData)
	};
	const getData = async () => {
		try {
			const res = await getMyAddFood(user.email);
			setData(res.data);
		} catch (error) {
			toast.error(error.message);
		}
	};

	useEffect(() => {
		getData();
	}, []);

	return (
		<div className="my-10">
			<div className="overflow-x-auto ">
				<table className="table">
					{/* head */}
					<thead>
						<tr>
							<th>Index</th>
							<th>Name</th>
							<th>Job</th>
							<th>Favorite Color</th>
							<th>Action</th>
						</tr>
					</thead>
					<tbody>
						{/* row 1 */}

						{data?.map((curData, index) => {
							
							
							return (
								<tr key={curData._id}>
									<th>{index + 1}</th>
									<td>
										<div className="flex items-center gap-3">
											<div className="avatar">
												<div className="mask mask-squircle h-12 w-12">
													<img
														src={curData.foodImage}
														alt={curData.displayName}
													/>
												</div>
											</div>
											<div>
												<div className="font-bold">{curData.displayName}</div>
												<div className="text-sm opacity-50">
													{curData.email}
												</div>
											</div>
										</div>
									</td>
									<td>
										{curData.pickupLocation}
										<br />
										<span className="badge badge-ghost badge-sm">
											{curData.status}
										</span>
									</td>
									<td>{curData.foodName}</td>
									<th>
										<button
											className="btn btn-ghost btn-xs"
											onClick={() => handleDelete(curData._id)}
										>
											<MdDelete className="text-red-600 font-bold text-2xl" />
										</button>

										<button className="btn btn-ghost btn-xs" >
											<Link to={`/update/${curData._id}`}>
											<RxUpdate className="text-green-600 font-bold text-2xl" />
											</Link>
										</button>
									</th>
								</tr>
							);
						})}
					</tbody>
				</table>
			</div>
		</div>
	);
}
