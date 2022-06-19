import { createSlice } from "@reduxjs/toolkit";

// User Login info
const database = [
  {
    name: "amir",
    email: "1",
    password: "1",
    admin: false,
  },
  {
    name: "admin",
    email: "1",
    password: "1",
    admin: true,
  },
  {
    name: "Jack",
    email: "1",
    password: "1",
    admin: false,
  },
  {
    name: "David",
    email: "1",
    password: "1",
    admin: false,
  },
];

export const userSlice = createSlice({
  name: "User",
  initialState: {
    user: null,
  },
  name2: "admin",
  initialState2: {
    admin: null,
  },
  reducers: {
    login: (state, action) => {
      const isName = database.some((x) => x.name === action.payload.name);

      if (isName) {
        const ifIsUser = database.filter(
          (item) => item.name === action.payload.name
        );
        const ifIsEmail = ifIsUser[0].email === action.payload.email;
        const ifIsPassword = ifIsUser[0].password === action.payload.password;

        const isAdmin = ifIsUser[0].admin;
        if (ifIsEmail && ifIsPassword && isAdmin) {
          state.admin = action.payload;
        } else if (ifIsEmail && ifIsPassword && !isAdmin) {
          state.user = action.payload;
        } else {
          state.user = null;
          state.admin = null;
        }
      } else {
        state.user = null;
        state.admin = null;
      }
    },
    logout: (state) => {
      state.user = null;
      state.admin = null;
    },
  },
});

export const { login, logout } = userSlice.actions;
export const selectUser = (state) => state.user.user;
export const selectAdmin = (state) => state.user.admin;
export const DataBase = database;
export default userSlice.reducer;
