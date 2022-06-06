import React from "react";
import "./App.css";
import { useSelector } from "react-redux";
import HomePage from "./components/homePage/HomePage";
import LoginPage from "./components/loginPage/LoginPage";
import { selectUser } from "./components/features/userSlice";

function App() {
  const user = useSelector(selectUser);
  return <div className="App">{user ? <HomePage /> : <LoginPage />}</div>;
}

export default App;
