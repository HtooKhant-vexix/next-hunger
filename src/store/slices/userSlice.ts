import {
  createAsyncThunk,
  createSlice,
  GetThunkAPI,
  PayloadAction,
} from "@reduxjs/toolkit";
import React from "react";
import { User, initialState, newUser } from "../../types/user";

export const registerUser = createAsyncThunk(
  "user/register",
  async (newUser: newUser, thunkApi) => {
    console.log("ddddd");
    const response = await fetch(`http://localhost:8000/api/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    });

    const dataFromServer = await response.json();
    console.log(dataFromServer, "tsss");
    const { accessToken } = dataFromServer;
    localStorage.setItem("token", accessToken);
    newUser.onSuccess && newUser.onSuccess();
  }
);

export const loginUser = createAsyncThunk(
  "user/loginUser",
  async (loginParams: newUser, thunkApi) => {
    const { name, pswd } = loginParams;
    console.log("ffs");
    const response = await fetch("http://localhost:8000/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, pswd }),
    });
    const dataFromServer = await response.json();
    const { accessToken } = dataFromServer;
    localStorage.setItem("token", accessToken);
    loginParams.onSuccess && loginParams.onSuccess();
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, { payload }: PayloadAction<User>) => {
      state.user = payload;
    },
  },
});

const { setUser } = userSlice.actions;

export default userSlice.reducer;
