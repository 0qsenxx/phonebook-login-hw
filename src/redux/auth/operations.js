import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const authAPI = axios.create({
  baseURL: "https://connections-api.goit.global/",
});

const setAuthHeader = (token) => {
  //   axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  authAPI.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  authAPI.defaults.headers.common.Authorization = "";
};

const register = createAsyncThunk(
  "auth/register",
  async (credentials, thunkAPI) => {
    try {
      const res = await authAPI.post("/users/signup", credentials);
      setAuthHeader(res.data.token);
      console.log(res.data);
      return res.data;
    } catch (error) {
      console.log("registr error");
    }
  }
);

const login = createAsyncThunk("auth/login", async (credentials, thunkAPI) => {
  try {
    const res = await authAPI.post("/users/login", credentials);
    setAuthHeader(res.data.token);
    return res.data;
  } catch (error) {
    console.log("login error");
  }
});

const logout = createAsyncThunk("auth/logout", async (token, thunkAPI) => {
  try {
    const res = await authAPI.post("/users/logout");
    // setAuthHeader(token);
    clearAuthHeader();
    return res.data;
  } catch (error) {
    console.log("logout error");
  }
});

// const refreshUser = createAsyncThunk("auth/refresh", async (_, thunkAPI) => {
//   // const state = thunkAPI.getState();
//   // const token = state.auth.token;

//   // if (token === null) {
//   //   return thunkAPI.rejectWithValue("Unable to fetch user");
//   // }

//   // try {
//   //   setAuthHeader(token);
//   //   const res = await authAPI.get("/users/me");
//   //   return res.data;
//   // } catch (error) {
//   //   console.log("refresh error");
//   // }
// });

export { register, login, logout };
