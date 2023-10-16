import React from 'react';
import { useLocation } from 'react-router-dom';

function Result() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const name = searchParams.get('name');
  const email = searchParams.get('email');

  return (
    <div>
      {name && email ? (
        <h1>Thank you, {name}, {email}, for contacting us.</h1>
      ) : (
        <h1>Thank you for contacting us.</h1>
      )}

    </div>
  );
}

export default Result;