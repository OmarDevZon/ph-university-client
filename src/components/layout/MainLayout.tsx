import { Button, Layout } from "antd";
const { Header, Content, Footer } = Layout;

import { Outlet } from "react-router-dom";
import { Sidebar } from "./sidebar";
import { useAppDispatch } from "../../redux/feature/hooks";
import { logOut } from "../../redux/feature/auth/auth.slice";

export const MainLayout = () => {
  const dispatch = useAppDispatch();
  const handelLogout = () => {
    dispatch(logOut());
  };

  return (
    <>
      <Layout style={{ height: "100vh" }}>
        <Sidebar />
        <Layout>
          <Header style={{ padding: 0 }}>
            <div>
              {" "}
              <Button onClick={handelLogout}>Logout</Button>
            </div>
          </Header>
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
