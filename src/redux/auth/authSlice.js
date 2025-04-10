import { createSlice } from "@reduxjs/toolkit";
import { register, login, logout } from "./operations";
import Cookies from "js-cookie";

const initialState = {
  //   user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(register.fulfilled, (state, action) => {
        console.log("register payload", action.payload);
        // state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        Cookies.set("phoneBookToken", action.payload.token, { expires: 1 });
      })
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        Cookies.set("phoneBookToken", action.payload.token, { expires: 1 });
      })
      .addCase(logout.fulfilled, (state, action) => {
        // state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
        Cookies.remove("phoneBookToken");
      });
  },
  reducers: {
    refreshUser: {
      reducer(state, action) {
        if (Cookies.get("phoneBookToken")) {
          state.token = Cookies.get("phoneBookToken");
          state.isLoggedIn = true;
        }
      },
    },
  },
});

export const authReducer = authSlice.reducer;
export const { refreshUser } = authSlice.actions;
