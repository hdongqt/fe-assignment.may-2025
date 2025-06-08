import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import { Layout1, Layout2 } from "@/components/layout";
import Project from "@/pages/project";
import Estimator from "@/pages/estimator";
import Home from "@/pages/home";
import UserManagement from "@/pages/user-management";
import JsonForm from "@/pages/json-form";
import PaginateTable from "@/pages/paginate-table";
import NotFound from "@/pages/not-found";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/project",
    element: <Layout1 />,
    children: [
      {
        path: "",
        element: <Project />,
      },
    ],
  },
  {
    path: "/estimator",
    element: <Layout1 />,
    children: [
      {
        path: "",
        element: <Estimator />,
      },
    ],
  },
  {
    path: "/user-management",
    element: <Layout2 />,
    children: [
      {
        path: "",
        element: <UserManagement />,
      },
    ],
  },
  {
    path: "/json-form",
    element: <JsonForm />,
  },
  {
    path: "/paginate-table",
    element: <PaginateTable />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
