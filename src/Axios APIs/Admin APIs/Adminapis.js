import axios from "../Axios/axios";
import { LoginAdminAPI } from "../Axios/adminConstants";

export default function LoginUserAPI(email, password, ipAddress) {
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
}
