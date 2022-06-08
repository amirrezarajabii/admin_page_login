import { createSlice } from "@reduxjs/toolkit";

// User Login info
const database = [
  {
    name: "amir",
    email: "1",
    password: "1",
  },
  {
    name: "admin",
    email: "1",
    password: "1",
  },
];

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
  },
  name2: "admin",
  initialState2: {
    admin: null,
  },
  reducers: {
    login: (state, action) => {
      if (JSON.stringify(action.payload) === JSON.stringify(database[0])) {
        state.user = action.payload;
      } else if (
        JSON.stringify(action.payload) === JSON.stringify(database[1])
      ) {
        state.admin = action.payload;
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
export default userSlice.reducer;
