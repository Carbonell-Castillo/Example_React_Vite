import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Goodbye = () => {
  const [message, setMessage] = useState('');

  useEffect(() => {
    axios.get('http://localhost:5000/api/goodbye')
      .then(response => {
        setMessage(response.data.message);
      })
      .catch(error => {
        console.error('Error fetching goodbye message:', error);
      });
  }, []);

  return (
    <div>
      <h1>{message}</h1>
      <p>Esta es la página de despedida.</p>
    </div>
  );
};

export default Goodbye;
