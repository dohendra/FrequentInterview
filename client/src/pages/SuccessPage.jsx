// import React from 'react';
import { Link } from 'react-router-dom';

const SuccessPage = () => {
  return (
    <div className="max-w-4xl mx-auto mt-10">
      <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">
        <strong className="font-bold">Success!</strong>
        <span className="block sm:inline"> Your form has been submitted successfully.</span>
        <Link to="/" className="block sm:inline ml-4 text-blue-500 hover:text-blue-800">Go back to Home</Link>
      </div>
    </div>
  );
};

export default SuccessPage;
