// import React from 'react';
import { Link } from 'react-router-dom';

const SuccessPage = () => {
  return (
    <div>
      <h1>Form Submitted Successfully!</h1>
      <Link to="/">Go back to Home</Link>
    </div>
  );
};

export default SuccessPage;
