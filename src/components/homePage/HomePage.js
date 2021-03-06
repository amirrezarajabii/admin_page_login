import React from "react";
import { useDispatch } from "react-redux";
import "./HomePage.css";
import { Layout, Menu, Button } from "antd";
import { UserOutlined, LogoutOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";
import { selectUser, logout } from "../features/userSlice";

const { Header, Content, Sider, Footer } = Layout;

function HomePage() {
  const user = useSelector(selectUser);

  const dispatch = useDispatch();

  const logoutHandler = (e) => {
    e.preventDefault();
    dispatch(logout());
  };

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
              <h1>Welcome {user.name}</h1>
              <br />
            </div>
          </Content>
          <Footer
            style={{
              textAlign: "center",
            }}
          >
            Ant Design ??2018 Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    </div>
  );
}

export default HomePage;
