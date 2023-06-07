const NotFoundPage = () => {
  return (
    <div className="flex items-center not-found justify-center h-screen ">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-black">404</h1>
        <p className="text-gray-300 text-xl mt-4">
          Oops! Page not found.
        </p>
        <p className="text-gray-300 max-w-[300px] text-lg mt-2">
          The requested page could not be found. Please check the URL or go back to the homepage.
        </p>
        <a
          href="/"
          className="text-white inline-block mt-4 px-6 py-3 rounded-lg text-lg bg-[--btn] hover:bg-white hover:text-black transition-colors duration-300"
        >
          Go to Homepage
        </a>
      </div>
    </div>
  );
};

export default NotFoundPage;
