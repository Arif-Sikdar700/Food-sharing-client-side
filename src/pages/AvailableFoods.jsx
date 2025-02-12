import React, { useEffect, useState } from "react";
import { allfood } from "../Api/Api";

import AllFoodCard from "../components/AllFoodCard";

export default function AvailableFoods() {
	const [data, setData] = useState(null);
	const [search, setSearch] = useState("");
	const [column, setColumn] = useState(true);

	const getAllData = async () => {
		try {
			const res = await allfood(search);
			setData(res.data);
		} catch (error) {}
	};

	useEffect(() => {
		getAllData();
	}, []);

	return (
		<div>
			<div className="my-5 flex flex-col gap-5 md:flex-row justify-between">
				<input
					type="text"
					placeholder="search here"
					value={search}
					className="input input-bordered w-full max-w-xs"
					onChange={(e) => setSearch(e.target.value)}
				/>
				<div className="flex gap-2">
          <p>You Want to two clumn! click here </p>
					<input
						type="checkbox"
						className="toggle"
						onChange={() => setColumn(!column)}
					/>
				</div>
			</div>
			<div
				className={`grid grid-cols-1 ${
					column ? "md:grid-cols-3" : "md:grid-cols-2"
				} gap-6`}
			>
				{data
					?.filter((filterData) =>
						filterData.foodName.toLowerCase().includes(search.toLowerCase())
					)
					.map((curData) => {
						return <AllFoodCard key={curData._id} curData={curData} />;
					})}
			</div>
		</div>
	);
}

// https://i.ibb.co.com/3yfRj6z/food-9.png
// https://i.ibb.co.com/51JPHD0/food-10.png
// https://i.ibb.co.com/rtP0g3X/food-11.png
