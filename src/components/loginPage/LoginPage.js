import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Layout, Menu } from "antd";
import { HomeOutlined } from "@ant-design/icons";
import "./LoginPage.css";
import { login } from "../features/userSlice";

const { Header, Content, Footer } = Layout;

function LoginPage() {
  // React States
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();

    dispatch(
      login({
        name: name,
        email: email,
        password: password,
        loggedin: true,
      })
    );
  };

  // User Login info
  const database = [
    {
      username: "admin",
      password: "1234",
    },
  ];

  return (
    <div>
      <Layout className="layout" style={{ minHeight: "100vh" }}>
        <Header>
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
            <form onSubmit={(e) => submitHandler(e)}>
              <label>Username:</label>
              <br />
              <input
                required
                type="name"
                name="name"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <br />
              <label>Email:</label>
              <br />
              <input
                required
                type="email"
                name="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <br />
              <label>Password:</label>
              <br />
              <input
                required
                type="password"
                name="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <br />
              <br />
              <button type="submit">Primary Button</button>
            </form>
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
