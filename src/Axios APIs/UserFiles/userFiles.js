import axios from "../Axios/axios";
import * as constants from "../Axios/filesConstants";

export const UploadNewAccountsFileDetailsAPI = (userFiles) => {
  return new Promise(async (resolve, reject) => {
    await axios
      .post(constants.AddFilesDetails, {
        userFiles,
      })
      .then((value) => {
        if (value) resolve(value.data);
      })
      .catch((err) => {
        if (err) reject(err.response.data);
      });
  });
};

export const UploadInvoicesFilesAPI = (formData) => {
  return new Promise(async (resolve, reject) => {
    await axios
      // .post(constants.FilesUpload + "/" + data, formData)
      .post(constants.FilesUpload, formData)
      .then((value) => {
        if (value) resolve(value.data);
      })
      .catch((err) => {
        if (err) reject(err.response.data);
      });
  });
};

export const GetAllFilesAPI = () => {
  return new Promise(async (resolve, reject) => {
    await axios
      .get(constants.GetAllInvoiceFiles)
      .then((value) => {
        if (value) resolve(value.data);
      })
      .catch((err) => {
        if (err) reject(err.response.data);
      });
  });
};
export const DownloadFilesAPI = (fileName) => {
  return new Promise(async (resolve, reject) => {
    const userDetails = localStorage.getItem("userDetails");

    const userObject = JSON.parse(userDetails);

    await axios
      .get(
        constants.DownloadInvoiceFiles + `/${fileName}/${userObject.id}`
        //   , {
        //   params: {
        //     fileName,
        //   },
        // }
      )
      .then((value) => {
        if (value) resolve(value.data);
      })
      .catch((err) => {
        if (err) reject(err.response.data);
      });
  });
};
export const GetAllFilesByUserIdAPI = () => {
  const userDetails = localStorage.getItem("userDetails");

  const userObject = JSON.parse(userDetails);

  return new Promise(async (resolve, reject) => {
    await axios
      .get(constants.GetAllInvoiceFiles)
      .then((value) => {
        if (value) resolve(value.data);
      })
      .catch((err) => {
        if (err) reject(err.response.data);
      });
  });
};
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
