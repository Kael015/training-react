import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import {
  BrowserRouter,
  createBrowserRouter,
  HashRouter,
  Router,
  RouterProvider,
} from "react-router-dom";
import Layout from "./pages/layout/Layout";
import Routes from "./router/Routes"

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: Routes,
    },
  ]);
  

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
