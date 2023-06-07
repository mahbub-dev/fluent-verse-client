import React from "react";

const NotFoundPage = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-blue-500">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-white">404</h1>
        <p className="text-white text-xl mt-4">
          Oops! Page not found.
        </p>
        <p className="text-white text-lg mt-2">
          The requested page could not be found. Please check the URL or go back to the homepage.
        </p>
        <a
          href="/"
          className="text-yellow-500 inline-block mt-4 px-6 py-3 rounded-lg text-lg bg-white hover:bg-yellow-500 hover:text-white transition-colors duration-300"
        >
          Go to Homepage
        </a>
      </div>
    </div>
  );
};

export default NotFoundPage;
