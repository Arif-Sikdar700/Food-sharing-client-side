import { createBrowserRouter, Route, RouterProvider } from "react-router-dom";
import MainLayouts from "../Layouts/MainLayouts";
import Home from "../pages/Home";

import Login from "../components/Login";
import Register from "../components/Register";
import AddFood from "../pages/AddFood";
import PriveteRoute from "../Private/PriveteRoute";
import AvailableFoods from "../pages/AvailableFoods";
import FoodDetails from "../components/FoodDetails";
import MyFoodRequest from "../pages/MyFoodRequest";
import ManageMyFoods from "../pages/ManageMyFoods";
import Update from "../pages/Update";
import { getSingleData } from "../Api/Api";
import ErrorPage from "../components/ErrorPage";
const router = createBrowserRouter([
	{
		path: "/",
		element: <MainLayouts />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: "/",
				element: <Home />,
			},
			{
				path: "/AvailableFoods",
				element: <AvailableFoods />,
			},
			{
				path: "/login",
				element: <Login />,
			},
			{
				path: "/register",
				element: <Register />,
			},
			{
				path: "/addFood",
				element: (
					<PriveteRoute>
						<AddFood />
					</PriveteRoute>
				),
			},
			{
				path: "/availableFood",
				element: (
					<PriveteRoute>
						<AvailableFoods />
					</PriveteRoute>
				),
			},
			{
				path: "/FoodDetails/:id",
				element: (
					<PriveteRoute>
						<FoodDetails />
					</PriveteRoute>
				),
			},
			{
				path: "/myFoodRequest",
				element: (
					<PriveteRoute>
						<MyFoodRequest />
					</PriveteRoute>
				),
			},
			{
				path: "/manageMyFoods",
				element: (
					<PriveteRoute>
						<ManageMyFoods />
					</PriveteRoute>
				),
			},
			{
				path: "/update/:id",
				element: (
					<PriveteRoute>
						<Update />
					</PriveteRoute>
				),
				loader: async ({ params }) => {
					return await getSingleData(params.id);
					
				},
			},
		],
	},
]);

export default router;
