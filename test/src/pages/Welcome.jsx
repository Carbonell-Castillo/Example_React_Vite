import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Welcome = () => {
  const [message, setMessage] = useState('');

  useEffect(() => {
    axios.get('http://localhost:5000/api/welcome')
      .then(response => {
        setMessage(response.data.message);
      })
      .catch(error => {
        console.error('Error fetching welcome message:', error);
      });
  }, []);

  return (
    <div>
      <h1>{message}</h1>
      <p>Esta es la página de bienvenida.</p>
    </div>
  );
};

export default Welcome;
