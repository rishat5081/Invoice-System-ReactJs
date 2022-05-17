import { useContext, useState, useEffect } from "react";
import { DashboardLayout } from "layouts";
import { Toast, ReactTable, Spinner } from "components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faCircleMinus, faTrash } from "@fortawesome/free-solid-svg-icons";
import * as S from "./styles";
import { GetAllFilesAPI } from "../../Axios APIs/UserFiles/userFiles";
const LoginLogs = () => {
  const [isWaiting, setIsWaiting] = useState(true);
  const [updateAccountState, setUpdateAccountState] = useState(false);
  const [tableData, setTableData] = useState([]);

  //child function
  const updateAccount = (object) => {
    setUpdateAccountState(true);
  };
  const deleteLoginRecord = (object) => {
    console.log(object);
  };
  useEffect(async () => {
    const invoiceData = await GetAllFilesAPI();
    // console.log("data    ", data);
    if (invoiceData.length > 0) {
      const newData = invoiceData.map((data) => ({
        email: data.email,
        fullName: data.fullName ? data.fullName : "-",
        accountNumber: data.accountNumber,
        fileName: data.fileName,
        options: (
          <button
            className="p-1 btn btn-sm btn-primary"
            onClick={() => deleteLoginRecord(data.fileId)}
          >
            {" "}
            Download{" "}
          </button>
        ),
      }));
      // // const newData = [
      //   {
      //     email: "Login User Email",
      //     date: "Login User Date & Time",
      //     companyName: "obj.companyName",
      //     options: (
      //       <button
      //         className="p-1 btn btn-sm btn-primary"
      //         onClick={() => deleteLoginRecord("obj.id")}
      //       >
      //         {" "}
      //         Update{" "}
      //       </button>
      //     ),
      //   },
      // ];

      console.log(newData);
      setTableData(newData);
      setIsWaiting(false);
    }

    // const newData = [
    //   {
    //     email: "Login User Email",
    //     date: "Login User Date & Time",
    //   },
    //   {
    //     email: "Login User Email",
    //     date: "Login User Date & Time",
    //   },
    //   {
    //     email: "Login User Email",
    //     date: "Login User Date & Time",
    //   },
    //   {
    //     email: "Login User Email",
    //     date: "Login User Date & Time",
    //   },
    //   {
    //     email: "Login User Email",
    //     date: "Login User Date & Time",
    //   },
    //   {
    //     email: "Login User Email",
    //     date: "Login User Date & Time",
    //   },
    //   {
    //     email: "Login User Email",
    //     date: "Login User Date & Time",
    //   },
    //   {
    //     email: "Login User Email",
    //     date: "Login User Date & Time",
    //   },
    //   {
    //     email: "Login User Email",
    //     date: "Login User Date & Time",
    //   },
    //   {
    //     email: "Login User Email",
    //     date: "Login User Date & Time",
    //   },
    //   {
    //     email: "Login User Email",
    //     date: "Login User Date & Time",
    //   },
    //   {
    //     email: "Login User Email",
    //     date: "Login User Date & Time",
    //   },
    //   {
    //     email: "Login User Email",
    //     date: "Login User Date & Time",
    //   },
    //   {
    //     email: "Login User Email",
    //     date: "Login User Date & Time",
    //   },
    //   {
    //     email: "Login User Email",
    //     date: "Login User Date & Time",
    //   },
    //   {
    //     email: "Login User Email",
    //     date: "Login User Date & Time",
    //   },
    //   {
    //     email: "Login User Email",
    //     date: "Login User Date & Time",
    //   },
    //   {
    //     email: "Login User Email",
    //     date: "Login User Date & Time",
    //   },
    //   {
    //     email: "Login User Email",
    //     date: "Login User Date & Time",
    //   },
    //   {
    //     email: "Login User Email",
    //     date: "Login User Date & Time",
    //   },
    //   {
    //     email: "Saad",
    //     date: "Login User Date & Time",
    //   },
    //   {
    //     email: "Saad",
    //     date: "Login User Date & Time",
    //   },
    //   {
    //     email: "Saad",
    //     date: "Login User Date & Time",
    //   },
    //   {
    //     email: "Saad",
    //     date: "Login User Date & Time",
    //   },
    //   {
    //     email: "Saad",
    //     date: "Login User Date & Time",
    //   },
    //   {
    //     email: "Login User Email",
    //     date: "Login User Date & Time",
    //   },
    //   {
    //     email: "Login User Email",
    //     date: "Login User Date & Time",
    //   },
    //   {
    //     email: "Login User Email",
    //     date: "Login User Date & Time",
    //   },
    //   {
    //     email: "Login User Email",
    //     date: "Login User Date & Time",
    //   },
    //   {
    //     email: "Login User Email",
    //     date: "Login User Date & Time",
    //   },
    // ];

    setTableData(newData);
    setIsWaiting(false);
  }, [updateAccountState]);

  const columns = [
    {
      Header: " ",
      columns: [
        {
          Header: "Email",
          accessor: "email",
        },
        {
          Header: "Full Name",
          accessor: "fullName",
        },
        {
          Header: "Account Number",
          accessor: "accountNumber",
        },
        {
          Header: "File Name",
          accessor: "fileName",
        },
        {
          Header: "Option",
          accessor: "options",
        },
      ],
    },
  ];
  return (
    <DashboardLayout title="Login Logs">
      {isWaiting === true ? (
        <Spinner />
      ) : (
        <ReactTable tableData={tableData} columns={columns} searchTag={false} />
      )}
    </DashboardLayout>
  );
};

export default LoginLogs;
