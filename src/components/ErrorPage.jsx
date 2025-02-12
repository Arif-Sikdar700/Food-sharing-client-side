import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page" className=" flex flex-col items-center min-h-screen justify-center text-2xl">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p className="text-red-600">
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
