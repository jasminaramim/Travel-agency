import App from "../App";
import { Home } from "../HomePages/Home";
import NotFound from "../Shared/NotFound";
import { createHashRouter } from "react-router-dom";

const router = createHashRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    
    
     
     
    ],
  },
    ,
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
