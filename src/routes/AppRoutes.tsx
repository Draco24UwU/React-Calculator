import { createBrowserRouter } from "react-router-dom";
import App from "@/App";
import RoutesConstants from "@/constants/RoutesConstants";
import About from "@/pages/About";

const router = createBrowserRouter([
  {
    path: RoutesConstants.home,
    element: <App />,
    errorElement: <div className="text-black">Error 401 not found.</div>,
    children: [
      {
        path: RoutesConstants.about,
        element: <About />,
      },
      {
        path: RoutesConstants.skills,
        element: <div>xd</div>,
      },
      {
        path: RoutesConstants.projects,
        element: <div>xd</div>,
      },
      {
        path: RoutesConstants.contact,
        element: <div>xd</div>,
      },
    ],
  },
]);

export default router;
