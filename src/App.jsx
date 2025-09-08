import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { About, Home, Recipe, Recipes } from "./pages";

import MainLayout from "./layouts/MainLayout";

export default function App() {
  const routes = createBrowserRouter([
    {
      path:"/",
      element:<MainLayout/>,
      children: [
        {
          index: true,
          path: "/",
          element: <Home/>
        },
        {
          path: "/about",
          element: <About/>
        },
        {
          path: "/recipe",
          element: <Recipe/>
        },
        {
          path: "/recipes",
          element: <Recipes/>
        }
      ]
    }
    
  ])
  return <RouterProvider router={routes} />
}