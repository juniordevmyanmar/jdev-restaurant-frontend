import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export type registerUser = {
    name : string;
    email: string;
    password: string;
    phone: string | undefined;
    dateOfBirth: Date | string | undefined;
    address: string | undefined;
}

type InitialState = {
    loading: boolean;
    userInfo: Object;
    token: string;
    error: string;
    success: string;
}

const initialState: InitialState = {
    loading: false,
    userInfo: {},
    token: "",
    error: "",
    success: "",
};

export const userRegister = createAsyncThunk(
    "register",
    async (registerUser: registerUser, { rejectWithValue }) => {
      try {
        const { data } = await axios.post(
          `${process.env.REACT_APP_URL}/register`,
          registerUser
        );
        localStorage.setItem("userToken", JSON.stringify(data.data));
  
        return data;
      } catch (error) {
        if (error instanceof Error) {
          return rejectWithValue(error);
        }
      }
    }
);


const registerSlice = createSlice({
    name: "register",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder.addCase(userRegister.pending, (state) => {
        state.loading = true;
      });
      builder.addCase(userRegister.fulfilled, (state, action) => {
        state.loading = false;
        state.token = action.payload.data;
      });
      builder.addCase(userRegister.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Something went wrong";
      });
    },
  });
  
  export default registerSlice.reducer;