import axios from "../Axios/axios";
import * as constants from "../Axios/filesConstants";

// export const CreateNewAccountAPI = (
//   accountNumber,
//   companyName,
//   accountType
// ) => {
//   return new Promise(async (resolve, reject) => {
//     await axios
//       .post(constants.CreateNewAccount, {
//         // usersAccounts: JSON.stringify(usersAccounts),
//         accountNumber,
//         companyName,
//         accountType,
//       })
//       .then((value) => {
//         if (value) resolve(value.data);
//       })
//       .catch((err) => {
//         if (err) reject(err.response.data);
//       });
//   });
// };

export const UploadInvoicesFilesAPI = (formData) => {
  return new Promise(async (resolve, reject) => {
    await axios
      .post(constants.FilesUpload, formData)
      .then((value) => {
        if (value) resolve(value.data);
      })
      .catch((err) => {
        if (err) reject(err.response.data);
      });
  });
};

// export const GetAllAccountAPI = () => {
//   return new Promise(async (resolve, reject) => {
//     await axios
//       .get(constants.GetAllAccounts)
//       .then((value) => {
//         if (value) resolve(value.data);
//       })
//       .catch((err) => {
//         if (err) reject(err.response.data);
//       });
//   });
// };
//
// export const UpdateAccountByIdAPI = (
//   accountId,
//   accountNumber,
//   accountType,
//   companyName
// ) => {
//   return new Promise(async (resolve, reject) => {
//     await axios
//       .post(constants.UpdateAccountById, {
//         body: { id: accountId, accountNumber, accountType, companyName },
//       })
//       .then((value) => {
//         if (value) resolve(value.data);
//       })
//       .catch((err) => {
//         if (err) reject(err.response.data);
//       });
//   });
// };
