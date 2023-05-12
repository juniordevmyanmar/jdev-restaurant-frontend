import axios from "axios";
import { loginUser } from "../slices/loginSlice";

export const login = (loginUser: loginUser) => {
  return axios.post(`${process.env.REACT_APP_LOGIN_URL}/login`, loginUser);
};
