import axios from "../Axios/axios";
import { LoginAPI } from "../Axios/constants.js";

export default function LoginUserAPI(email, password) {
  return new Promise(async (resolve, reject) => {
    await axios
      .post(LoginAPI, {
        email,
        password,
      })
      .then((value) => {
        if (value) resolve(value.data);
      })
      .catch((err) => {
        if (err) reject(err.response.data);
      });
  });
}
