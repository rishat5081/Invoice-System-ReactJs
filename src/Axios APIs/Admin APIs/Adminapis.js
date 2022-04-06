import axios from "../Axios/axios";
import { LoginAdminAPI, CreateUser } from "../Axios/adminConstants";

const token = localStorage.getItem("token");
const tokenIntegration = {
  headers: {
    Authorization: "Bearer " + token, //the token is a variable which holds the token
  },
};

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

export const CreateUserAPI = (
  firstName,
  lastName,
  email,
  password,
  confirmPassword
) => {
  return new Promise(async (resolve, reject) => {
    await axios
      .post(CreateUser, tokenIntegration, {
        firstName,
        lastName,
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
