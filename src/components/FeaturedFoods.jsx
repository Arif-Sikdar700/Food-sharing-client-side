import React from "react";
import "animate.css";
import FeaturedFoodCard from "./FeaturedFoodCard";
import { Link } from "react-router-dom";
export default function FeaturedFoods({ data }) {
	return (
		<div>
			<h3 className="text-gray-800 text-2xl md:text-4xl font-semibold md:font-bold underline underline-offset-4 animate__animated animate__fadeInUp ">
				FeaturedFoods :
			</h3>
			<div className="grid grid-cols-1 md:grid-cols-3 gap-10">
				{data?.map((curData, index) => {
					return <FeaturedFoodCard key={index} curData={curData} />;
				})}
			</div>
			<div className="flex justify-center my-4">
				<button className="btn btn-accent text-white">
					<Link to={"/availableFood"}>See All Food</Link>
				</button>
			</div>
		</div>
	);
}
