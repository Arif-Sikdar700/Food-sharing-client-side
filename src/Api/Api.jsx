import axios from "axios";
import UseAuth from "../hooks/UseAuth";
import { useNavigate } from "react-router-dom";

export const instance = axios.create({
	baseURL: "https://food-sharing-eight.vercel.app",
	withCredentials: true,
});

export default function UseAxios() {
	const { UserLogOut } = UseAuth();
	const navigate = useNavigate();
	instance.interceptors.response.use(
		(res) => {
			return res;
		},
		async (error) => {
			
			if (error.response.status === 401 || error.response.status === 403) {
				UserLogOut();

				navigate("/login");
			}
		}
	);

	return instance;
}

export const foodAdd = (FormData) => {
	return instance.post("/food", FormData);
};
export const FoodgetHight = () => {
	return instance.get("/food-hight");
};
export const allfood = () => {
	return instance.get(`/allfood`);
};
export const getSingleData = (id) => {
	return instance.get(`/singleData/${id}`);
};
export const myFoodRequest = (data) => {
	return instance.post(`/foodRequest`, data);
};

export const getMyAddFood = (email) => {
	return instance.get(`/manageMyFood/${email}`);
};
export const deleteMyFood = (id) => {
	return instance.delete(`/manageMyFood/${id}`);
};
export const updateMyFood = (id, data) => {
	return instance.patch(`/manageMyFood/${id}`, data);
};
export const jwtTokenGet = (data) => {
	return instance.post("/jwt", data);
};
export const jwtTokenLogOut = () => {
	return instance.post("/logout", {});
};
