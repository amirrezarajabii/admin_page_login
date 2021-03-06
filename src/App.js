import React from "react";
import "./App.css";
import { useSelector } from "react-redux";
import LoginPage from "./components/loginPage/LoginPage";
import HomePage from "./components/homePage/HomePage";
import AdminPage from "./components/adminPage/AdminPage";
import { selectAdmin, selectUser } from "./components/features/userSlice";

function App() {
  const admin = useSelector(selectAdmin);
  const user = useSelector(selectUser);

  return (
    <div className="App">
      {user ? <HomePage /> : admin ? <AdminPage /> : <LoginPage />}
    </div>
  );
}

export default App;
