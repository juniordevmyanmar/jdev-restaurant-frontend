import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export type loginUser = {
  email: string;
  password: string;
};

type InitialState = {
  loading: boolean;
  userInfo: Object;
  token: string;
  error: string;
  success: string;
};

const initialState: InitialState = {
  loading: false,
  userInfo: {},
  token: "",
  error: "",
  success: "",
};

export const userLogin = createAsyncThunk(
  "login",
  async (loignUser: loginUser, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_LOGIN_URL}/login`,
        loignUser
      );
      localStorage.setItem("userToken", JSON.stringify(data.data.token));

      return data;
    } catch (error) {
      if (error instanceof Error) {
        return rejectWithValue(error);
      }
    }
  }
);

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(userLogin.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(userLogin.fulfilled, (state, action) => {
      state.loading = false;
      state.token = action.payload.data.token;
    });
    builder.addCase(userLogin.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || "Something went wrong";
    });
  },
});

export default loginSlice.reducer;
