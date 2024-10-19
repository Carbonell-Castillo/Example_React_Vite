import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App'; // Asegúrate de tener el componente App
import Welcome from './pages/Welcome';
import Goodbye from './pages/Goodbye';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />  {/* Esto es importante */}
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/goodbye" element={<Goodbye />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
