import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { ToastContainer, toast } from "react-toastify";
import router from "./routes/route.jsx";
import { RouterProvider } from "react-router-dom";
import AuthProvide from "./context/AuthProvide.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
const queryClient = new QueryClient()
createRoot(document.getElementById("root")).render(
	<StrictMode>
			<AuthProvide>
		<QueryClientProvider client={queryClient}>
				<RouterProvider router={router} />
				<ToastContainer />
				<Toaster/>
		</QueryClientProvider>
			</AuthProvide>
	</StrictMode>
);
