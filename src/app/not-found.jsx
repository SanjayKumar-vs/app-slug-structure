const ErrorPage = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800">
          404 - Page Not Found
        </h1>
        <p className="mt-2 text-lg text-gray-600">
          The page you are looking for does not exist.
        </p>
      </div>
    </div>
  );
};

export default ErrorPage;
