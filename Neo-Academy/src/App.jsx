import React from 'react';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import docTopHeader from './components/docsComponents/docTopHeader';
// import agencyRiutes from './routes/agencyRiutes';

const router = createBrowserRouter([
  ...docTopHeader()
  
]);

function App() {
  
  return (
    <RouterProvider router={router} />
  );
}

export default App;