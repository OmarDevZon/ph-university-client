import { Layout, Menu } from "antd";
// import { facultySidebar } from "../../routers/faculty.router";
import { adminSidebar } from "../../routers/admin.router";
const { Sider } = Layout;

export const Sidebar = () => {
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
