import React from "react";
import { useDispatch } from "react-redux";
import { Layout, Menu, Button } from "antd";
import { LogoutOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";
import { selectAdmin, logout, DataBase } from "../features/userSlice";

const { Header, Content, Sider, Footer } = Layout;

function AdminPage() {
  const admin = useSelector(selectAdmin);

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
            defaultSelectedKeys={["1"]}
            items={DataBase.filter((item) => !item.admin).map((index) => ({
              key: index.length,
              label: index.name,
            }))}
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
              <h1>Welcome {admin.name}</h1>
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

export default AdminPage;
