import axios from "../Axios/axios";
import { LoginAdminAPI, CreateUser } from "../Axios/adminConstants";

export const LoginUserAPI = (email, password, ipAddress) => {
  return new Promise(async (resolve, reject) => {
    await axios
      .post(LoginAdminAPI, {
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

export const CreateUserAPI = (email, password, confirmPassword) => {
  return new Promise(async (resolve, reject) => {
    await axios
      .post(CreateUser, {
        email,
        password,
        confirmPassword,
      })
      .then((value) => {
        if (value) resolve(value.data);
      })
      .catch((err) => {
        if (err) reject(err.response.data);
      });
  });
};
