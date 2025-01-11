import { useRouteError } from "react-router-dom";

type RouteError = {
  status?: number;
  statusText?: string;
  message?: string;
};

const Error = () => {
  const error = useRouteError() as RouteError;

  return (
    <div className="min-h-screen bg-gradient-to-r from-lime-300 to-lime-600">
      <h1>{`Error: ${error?.message || "An unexpected error occurred"}`}</h1>
    </div>
  );
};

export default Error;
