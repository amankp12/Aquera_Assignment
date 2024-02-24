import React from "react";
import { useRouteError } from "react-router";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  const err = useRouteError();

  return (
    <div className="flex flex-col bg-amber-300 w-screen h-screen items-center justify-center">
      <img
        className="rounded-full w-96 h-96"
        src="https://imgs.search.brave.com/kHxOOzAzDUOqE8AaNROTozJb7vBCsHjO-EG_g8BisLg/rs:fit:500:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAxLzE5LzI3LzUz/LzM2MF9GXzExOTI3/NTM2M19YOFFVQ0NH/Qk1lVGo1VXFpcm45/QjJlWFZ1OUpwTmQ4/bC5qcGc"
        alt="Finding Error"
      />
      <h1 className="p-4 text-4xl font-bold">ERROR: {err.status}</h1>
      <h1 className="px-2  text-3xl p-1">{err.statusText}</h1>
      <Link to="/">
        <h1 className="px-2 text-black text-3xl underline animate-pulse">
          Home
        </h1>
      </Link>
    </div>
  );
};

export default ErrorPage;
