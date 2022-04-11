import axios from "../Axios/axios";
import * as constants from "../Axios/adminConstants";

export const LoginUserAPI = (email, password, ipAddress) => {
  return new Promise(async (resolve, reject) => {
    await axios
      .post(constants.LoginAdminAPI, {
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
      .post(constants.CreateUser, {
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

export const GetAllUsersAPI = () => {
  return new Promise(async (resolve, reject) => {
    await axios
      .get(constants.GetAllUsers)
      .then((value) => {
        if (value) resolve(value.data);
      })
      .catch((err) => {
        if (err) reject(err.response.data);
      });
  });
};

export const GetUserByIdAPI = (id) => {
  return new Promise(async (resolve, reject) => {
    await axios
      .get(constants.GetUserById, { params: { id } })
      .then((value) => {
        if (value) resolve(value.data);
      })
      .catch((err) => {
        if (err) reject(err.response.data);
      });
  });
};

export const DeleteUserByIdAPI = (id) => {
  return new Promise(async (resolve, reject) => {
    await axios
      .delete(constants.DeleteUserById, { params: { id } })
      .then((value) => {
        if (value) resolve(value.data);
      })
      .catch((err) => {
        if (err) reject(err.response.data);
      });
  });
};

export const UpdateUserByIdAPI = (id, firstName, lastName, email) => {
  return new Promise(async (resolve, reject) => {
    await axios
      .post(constants.UpdateUserById, { id, firstName, lastName, email })
      .then((value) => {
        if (value) resolve(value.data);
      })
      .catch((err) => {
        if (err) reject(err.response.data);
      });
  });
};
