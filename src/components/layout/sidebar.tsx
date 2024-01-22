/* eslint-disable @typescript-eslint/no-unused-vars */
import { Layout, Menu } from "antd";
// import { facultySidebar } from "../../routers/faculty.router";
import { adminPaths, adminSidebar } from "../../routers/admin.router";
import { selectCurrentUser } from "../../redux/feature/auth/auth.slice";
import { useAppSelector } from "../../redux/feature/hooks";
import { sidebarItemGenerator } from "../../routers/router.utils";

const { Sider } = Layout;

const userRole = {
  ADMIN: 'admin',
  FACULTY: "faculty",
  STUDENT: "student",
};

export const Sidebar = () => {
  const user = useAppSelector(selectCurrentUser);

  let sidebarItems;
  switch (user!.role) {
    case userRole.ADMIN:
      sidebarItems = sidebarItemGenerator(adminPaths, userRole.FACULTY);

      break;
    case userRole.FACULTY:
      sidebarItems = sidebarItemGenerator(adminPaths, userRole.FACULTY);

      break;
    case userRole.STUDENT:
      sidebarItems = sidebarItemGenerator(adminPaths, userRole.STUDENT);
      break;

    default:
      break;
  }
  return (
    <Sider
      breakpoint="lg"
      collapsedWidth="0"
      onBreakpoint={() => {}}
      onCollapse={(collapsed, type) => {
        console.log(collapsed, type);
      }}
    >
      <div className="demo-logo-vertical" />
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["4"]}
        items={adminSidebar}
      />
    </Sider>
  );
};
