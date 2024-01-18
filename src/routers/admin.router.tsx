import { routGenerator, sidebarItemGenerator } from "./router.utils";

export const adminPaths = [
  {
    name: "Admin",
    path: "/admin",
    element: "AdminDashboard",
  },
  {
    name: "Admin Management",
    children: [
      {
        name: "Crate Admin",
        path: "create-admin",
        element: "CreateAdmin",
      },
      {
        name: "Crate Faculty",
        path: "create-faculty",
        element: "CreateFaculty",
      },
      {
        name: "Crate Student",
        path: "create-student",
        element: "CreateStudent",
      },
    ],
  },
  {
    name: "Course Management",
    children: [
      {
        name: "Offered Course",
        path: "offered-course",
        element: "OfferedCourse",
      },
    ],
  },
];

export const adminSidebar = sidebarItemGenerator(adminPaths);

export const adminRouters = routGenerator(adminPaths);
