import { createSlice } from "@reduxjs/toolkit";

// User Login info
const database = [
  {
    name: "amir",
    email: "email",
    password: "1234",
  },
];

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
  },
  reducers: {
    login: (state, action) => {
      if (JSON.stringify(action.payload) === JSON.stringify(database[0])) {
        state.user = action.payload;
      } else {
        state.user = null;
      }
    },
    logout: (state) => {
      state.user = null;
    },
  },
});

export const { login, logout } = userSlice.actions;
export const selectUser = (state) => state.user.user;
export default userSlice.reducer;
