

import { AcademicSemester } from "../pages/admin/academic.management/AcademicSemester";
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
        path: `/admin/create-admin`,
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
  {
    name: "Academic Management",
    children: [
      {
        name: "Academic Semester",
        path: "academic-semester",
        element: <AcademicSemester/>,
      },
    ],
  },
];

export const adminSidebar = sidebarItemGenerator(adminPaths);

export const adminRouters = routGenerator(adminPaths);
