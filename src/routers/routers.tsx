import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { ContactUs } from "../pages/contact";
import { adminRouters } from "./admin.router";
import { facultyRouters } from "./faculty.router";
import { Login } from "../pages/authicatin/login";
import { Protected } from "../components/protected";

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
    element: (
      <Protected>
        <App />
      </Protected>
    ),
    children: adminRouters,
  },
  {
    path: "/faculty",
    element: <App />,
    children: facultyRouters,
  },
  {
    path: "login",
    element: <Login />,
  },
]);

export default router;
