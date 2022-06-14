import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  selectAdmin,
  selectUser,
  logout,
} from "../components/features/userSlice";
import { Layout, Menu, Button } from "antd";
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
  LogoutOutlined,
} from "@ant-design/icons";

const { Header, Content, Sider, Footer } = Layout;

function TestPage() {
  const admin = useSelector(selectAdmin);
  const user = useSelector(selectUser);

  const dispatch = useDispatch();

  const logoutHandler = (e) => {
    e.preventDefault();
    dispatch(logout());
  };

  function userName() {
    if (user) {
      return <span>{user.name}</span>;
    } else if (admin) {
      return <span>{admin.name}</span>;
    }
  }

  function siderHandler() {
    if (user) {
      return (
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["4"]}
          items={[
            {
              key: "1",
              icon: <UserOutlined />,
              label: "nav 1",
            },
          ]}
        />
      );
    } else if (admin) {
      return (
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["4"]}
          items={[
            UserOutlined,
            VideoCameraOutlined,
            UploadOutlined,
            UserOutlined,
          ].map((icon, index) => ({
            key: String(index + 1),
            icon: React.createElement(icon),
            label: `nav ${index + 1}`,
          }))}
        />
      );
    }
  }

  return (
    <div>
      <Layout style={{ minHeight: "100vh" }}>
        <Sider
          breakpoint="lg"
          collapsedWidth="0"
          onBreakpoint={(broken) => {
            console.log(broken);
          }}
          onCollapse={(collapsed, type) => {
            console.log(collapsed, type);
          }}
        >
          <div className="logo" />

          {siderHandler()}
        </Sider>
        <Layout>
          <Header
            className="site-layout-sub-header-background"
            style={{ padding: 0 }}
          >
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={["mail"]}
              style={{ justifyContent: "end" }}
            >
              <Menu.Item key="mail">
                <Button
                  onClick={(e) => logoutHandler(e)}
                  type="text"
                  icon={<LogoutOutlined />}
                ></Button>
              </Menu.Item>
            </Menu>
          </Header>

          <Content style={{ margin: "24px 16px 0" }}>
            <div
              className="site-layout-background"
              style={{ padding: 24, minHeight: 360 }}
            >
              <h1>Welcome {userName()}</h1>
              <br />
            </div>
          </Content>
          <Footer
            style={{
              textAlign: "center",
            }}
          >
            Ant Design ©2018 Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    </div>
  );
}

export default TestPage;
