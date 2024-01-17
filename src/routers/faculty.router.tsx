import { routGenerator, sidebarItemGenerator } from "./router.utils";

export const facultyPaths = [
  {
    name: "Faculty",
    path: "/faculty",
    element: "AdminDashboard",
  },
  {
    name: "Admin Management",
    children: [
      {
        name: "Crate",
        path: "create",
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


export const facultyRouters =  routGenerator(facultyPaths)
export const facultySidebar =  sidebarItemGenerator(facultyPaths)