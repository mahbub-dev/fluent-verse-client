const NotFoundPage = () => {
  return (
    <div className="flex items-center not-found justify-center h-screen ">
      <div className="text-center">
        <img src="https://png.pngtree.com/png-vector/20210827/ourmid/pngtree-error-404-page-not-found-png-image_3832696.jpg" alt="" className="rounded h-[300px] " />
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
