import { Layout, Menu } from "antd";
const { Header, Content, Footer, Sider } = Layout;
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Outlet } from "react-router-dom";
import { facultySidebar } from "../../routers/faculty.router";

// const items = [
//   UserOutlined,
//   VideoCameraOutlined,
//   UploadOutlined,
//   UserOutlined,
// ].map((icon, index) => ({
//   key: String(index + 1),
//   icon: createElement(icon),
//   label: "nav",
// }));

// const adminSidebar = adminPaths.reduce((acc: TPaths[], item) => {
//   if (item.path && item.element) {
//     acc.push({
//       key: item.name,
//       label: <NavLink to={`/admin/${item.path}`}>{item.name}</NavLink>,
//     });
//   }
//   if (item.children) {
//     acc.push({
//       key: item.name,
//       label: "admin",
//       children: item.children.map((child) => ({
//         key: child.name,
//         label: <NavLink to={`/admin${child.path}`}>{child.name}</NavLink>,
//       })),
//     });
//   }

//   return acc;
// }, []);

// console.log(adminSidebar)

export const MainLayout = () => {
  return (
    <>
      <Layout style={{ height: "100vh" }}>
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
            items={facultySidebar}
          />
        </Sider>
        <Layout>
          <Header style={{ padding: 0 }} />
          <Content style={{ margin: "24px 16px 0" }}>
            <div
              style={{
                padding: 24,
                minHeight: 360,
              }}
            >
              <Outlet />
            </div>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            Ant Design ©{new Date().getFullYear()} Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    </>
  );
};
