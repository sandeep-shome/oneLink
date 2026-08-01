import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "@/screens/home";

const App: React.FC = () => {
  const router = createBrowserRouter([
    {
      index: true,
      element: <Home />,
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
