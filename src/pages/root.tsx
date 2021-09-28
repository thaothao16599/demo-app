import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "./home";
import NotFound from "./notfound";

const Root: React.FC = () => {
  // We removed the <BrowserRouter> element from App because the
  // useRoutes hook needs to be in the context of a <BrowserRouter>
  // element. This is a common pattern with React Router apps that
  // are rendered in different environments. To render an <App>,
  // you'll need to wrap it in your own <BrowserRouter> element.
  const element = useRoutes([
    // A route object has the same properties as a <Route>
    // element. The `children` is just an array of child routes.
    { path: "/", element: <Home /> },
    { path: "*", element: <NotFound /> },
  ]);

  return element;
};
export default Root;
