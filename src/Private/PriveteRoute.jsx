import React, { useContext } from "react";
import { AuthContext } from "../context/AuthProvide";
import { Navigate } from "react-router-dom";

export default function PriveteRoute({ children }) {
	const { user, loading } = useContext(AuthContext);

	if (loading) {
		return (
			<div className="flex justify-center ">
				<span className="loading w-52  loading-spinner text-error"></span>;
			</div>
		);
	}
	if (user) {
		return children;
	}
	return <Navigate to={"/login"}></Navigate>;
}
