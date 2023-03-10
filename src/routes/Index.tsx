import React from 'react';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { DeckPage } from '../pages/Deck/Deck.page';
import { NamePage } from '../pages/Name/Name.page';

export const Routes: React.FC = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <NamePage />,
    },
    {
      path: '/deck/:name',
      element: <DeckPage />,
    },
  ]);

  return <RouterProvider router={router} />;
};
