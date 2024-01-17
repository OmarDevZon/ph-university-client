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
export const adminSidebar = sidebarItemGenerator(adminPaths)

export const adminRouters = routGenerator(adminPaths)



// export const adminSidebar = adminPaths.reduce((acc: TPaths[], item) => {
//   if (item.path && item.element) {
//     acc.push({
//       key: item.name,
//       label: <NavLink to={`${item.path}`}>{item.name}</NavLink>,
//     });
//   }
//   if (item.children) {
//     acc.push({
//       key: item.name,
//       label: item.name,
//       children: item.children.map((child) => ({
//         key: child.name,
//         label: <NavLink to={`${child.path}`}>{item.name}</NavLink>,
//       })),
//     });
//   }
//   return acc;
// }, []);


// export const adminRouters = adminPaths.reduce((acc: TRouts[], item) => {
//   if (item.path && item.element) {
//     acc.push({
//       path: item.path,
//       element: item.element,
//     });
//   }
//   if (item.children) {
//     item.children.forEach((child) => {
//       acc.push({
//         path: child.path,
//         element: child.element,
//       });
//     });
//   }

//   return acc;
// }, []);



// export const adminPaths = [
//   {
//     path: "",
//     element: <AdminDashboard />,
//   },
//   {
//     path: "create-admin",
//     element: <CreateAdmin />,
//   },
//   {
//     path: "create-faculty",
//     element: <CreateFaculty />,
//   },
//   {
//     path: "create-student",
//     element: <CreateStudent />,
//   },
// ];
