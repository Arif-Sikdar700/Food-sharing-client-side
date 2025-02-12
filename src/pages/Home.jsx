import React, { useContext, useEffect, useState } from "react";
import Carousel from "../components/Carosal";
import FeaturedFoods from "../components/FeaturedFoods";
import { FoodgetHight } from "../Api/Api";
import Menu from "../components/Menu";
import Clients from "../components/Clients";
import { AuthContext } from "../context/AuthProvide";
import UseAuth from "../hooks/UseAuth";


export default function Home() {
	
	const [data, setData] =useState()
	const SixData = async () => {
		try {
			const res = await FoodgetHight();
			setData(res.data)  ;
		} catch (error) {}
	};


	useEffect(()=>{
		SixData()
	},[])

	
	return (
		<div>
			<Carousel />
			<FeaturedFoods data={data} />
			<Menu/>
			<Clients/>
		</div>
	);
}
