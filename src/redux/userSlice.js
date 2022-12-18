import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: "user",
  initialState: {
    name: "",
    isLogged: false,
  },
  reducers: {
    changerUser(state, { payload }) {
      return { ...state, isLogged: true, name: payload };
    },
    logout(state) {
      return { ...state, isLogged: false, name: "" };
    },
  },
});

export const { changerUser, logout } = slice.actions;
export const selectUser = (state) => state.user;
export default slice.reducer;
