import React, { useContext } from "react";
import { AuthContext } from "../context/AuthProvide";

export default function UseAuth() {
	const context = useContext(AuthContext);
	return context;
}
