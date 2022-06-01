import React from "react";
import { Button, Form, Input } from "antd";
import { Layout, Menu } from "antd";
import { HomeOutlined } from "@ant-design/icons";
import Password from "antd/lib/input/Password";
const { Header, Content, Footer } = Layout;

const onFinish = (values) => {
  console.log("Success:", values);
};

const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

const users = {
  userName = "amir",
  Password = 1234
}

function LoginPage() {
  return (
    <div>
      <Layout className="layout" style={{ minHeight: "100vh" }}>
        <Header>
          <div className="logo" />

          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={["mail"]}
            style={{ justifyContent: "end" }}
          >
            <Menu.Item disabled key="register" icon={<HomeOutlined />}>
              Home
            </Menu.Item>
          </Menu>
        </Header>
        <Content
          style={{
            padding: "0 50px",
            margin: "50px 0",
          }}
        >
          <div className="site-layout-content">
            <Form
              name="basic"
              labelCol={{
                span: 8,
              }}
              wrapperCol={{
                span: 8,
              }}
              initialValues={{
                remember: true,
              }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
            >
              <Form.Item
                label="Username"
                name="username"
                rules={[
                  {
                    required: true,
                    message: "Please input your username!",
                  },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Password"
                name="password"
                rules={[
                  {
                    required: true,
                    message: "Please input your password!",
                  },
                ]}
              >
                <Input.Password />
              </Form.Item>

              <Form.Item
                wrapperCol={{
                  offset: 8,
                  span: 8,
                }}
              >
                <Button type="primary" htmlType="submit">
                  Login
                </Button>
              </Form.Item>
            </Form>
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
    </div>
  );
}

export default LoginPage;
