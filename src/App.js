import React from "react";
import "./App.css";
import { useSelector } from "react-redux";
import LoginPage from "./components/loginPage/LoginPage";
import { selectAdmin, selectUser } from "./components/features/userSlice";
import TestPage from "./components/test";

function App() {
  const admin = useSelector(selectAdmin);
  const user = useSelector(selectUser);

  return (
    <div className="App">
      {user ? <TestPage /> : admin ? <TestPage /> : <LoginPage />}
    </div>
  );
}

export default App;
