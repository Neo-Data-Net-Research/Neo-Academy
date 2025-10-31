import React from 'react';
import AiCourseDocs from '../pages/docsPages/aiCourseDocs';

const docsRoutes = () => {
  return [
    {
      path: '/ai-course',
      element: <AiCourseDocs />,
    },
    {
      path: '*',
      element: <AiCourseDocs />,
    },
  ];
};

export default docsRoutes;
