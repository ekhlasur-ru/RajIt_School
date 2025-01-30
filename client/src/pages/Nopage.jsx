import React from "react";
import { useNavigate } from "react-router-dom";

function Nopage() {
  const navigate = useNavigate();
  return (
    <>
      <div className="bg-gray-100">
        <div className="flex h-screen flex-col items-center justify-center">
          <h1 className="text-8xl font-bold text-orange-400">404</h1>
          <p className="text-4xl font-medium text-gray-800">Page Not Found</p>
          <button
            onClick={() => {
              navigate("/");
            }}
            className="mt-4 text-xl text-blue-600 hover:underline">
            Go Back to Home
          </button>
        </div>
      </div>
    </>
  );
}

export default Nopage;
