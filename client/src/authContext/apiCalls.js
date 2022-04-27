import axios from "axios";
import { axiosInstance } from "../assets/js/axiosInstance";
import {
  loginFailure,
  loginStart,
  loginSuccess,
  logoutSuccess,
} from "./AuthActions";

export const login = async (user, dispatch) => {
  dispatch(loginStart());
  try {
    const res = await axiosInstance.post("auth/login", user);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};

export const logout = async (dispatch) => {
  try {
    dispatch(logoutSuccess());
  } catch (err) {
    console.log(err);
  }
};
