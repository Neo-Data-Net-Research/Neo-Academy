import React from 'react';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import docsRoutes from './routes/docsRoutes';

const router = createBrowserRouter([
  ...docsRoutes()
  
]);



function App() {
  
  return (
    <RouterProvider router={router} />
  );
}

export default App;