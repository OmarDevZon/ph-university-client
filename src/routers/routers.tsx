import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { ContactUs } from "../pages/contact";
import { adminRouters } from "./admin.router";
import { facultyRouters } from "./faculty.router";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "contact-us",
        element: <ContactUs />,
      },
    ],
  },
  {
    path: "/admin",
    element: <App />,
    children: adminRouters,
  },
  {
    path: "/faculty",
    element: <App />,
    children: facultyRouters,
  },
]);

export default router;
