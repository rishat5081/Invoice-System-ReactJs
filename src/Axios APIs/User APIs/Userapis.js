import axios from "../Axios/axios";
import { LoginAPI, ChangePassword } from "../Axios/constants";

export const LoginUserAPI = (email, password, ipAddress) => {
  return new Promise(async (resolve, reject) => {
    await axios
      .post(LoginAPI, {
        email,
        password,
        ipAddress,
      })
      .then((value) => {
        if (value) resolve(value.data);
      })
      .catch((err) => {
        if (err) reject(err.response.data);
      });
  });
};
export const ChangePasswordAPI = (oldPassword, newPassword) => {
  return new Promise(async (resolve, reject) => {
    const userDetails = localStorage.getItem("userDetails");
    const userObject = JSON.parse(userDetails);
    await axios
      .post(ChangePassword, {
        oldPassword,
        newPassword,
        userId: userObject.id,
      })
      .then((value) => {
        if (value) resolve(value.data);
      })
      .catch((err) => {
        if (err) reject(err.response.data);
      });
  });
};
