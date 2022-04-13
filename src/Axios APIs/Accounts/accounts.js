import axios from "../Axios/axios";
import * as constants from "../Axios/accountsConstant";

export const CreateNewAccountAPI = (usersAccounts) => {
  return new Promise(async (resolve, reject) => {
    await axios
      .post(constants.CreateNewAccount, {
        // usersAccounts: JSON.stringify(usersAccounts),
        usersAccounts,
      })
      .then((value) => {
        if (value) resolve(value.data);
      })
      .catch((err) => {
        if (err) reject(err.response.data);
      });
  });
};
export const CreateAccountfromFileAPI = (accountRegistration) => {
  return new Promise(async (resolve, reject) => {
    await axios
      .post(constants.CreateAccountfromFile, {
        // usersAccounts: JSON.stringify(usersAccounts),
        accountRegistration,
      })
      .then((value) => {
        if (value) resolve(value.data);
      })
      .catch((err) => {
        if (err) reject(err.response.data);
      });
  });
};
