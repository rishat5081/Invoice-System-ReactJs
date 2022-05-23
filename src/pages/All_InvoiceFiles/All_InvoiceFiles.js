import { useContext, useState, useEffect } from "react";
import { DashboardLayout } from "layouts";
import { Toast, ReactTable, Spinner } from "components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faCircleMinus, faTrash } from "@fortawesome/free-solid-svg-icons";
import * as S from "./styles";
import {
  GetAllFilesAPI,
  DownloadFilesAPI,
} from "../../Axios APIs/UserFiles/userFiles";
const LoginLogs = () => {
  const [isWaiting, setIsWaiting] = useState(true);
  const [updateAccountState, setUpdateAccountState] = useState(false);
  const [tableData, setTableData] = useState([]);

  //child function
  const updateAccount = (object) => {
    setUpdateAccountState(true);
  };
  const downloadFile = async (object) => {
    const data = await DownloadFilesAPI(object).catch((err) => {
      Toast(err, "error");
    });
    if (data) {
      const link = document.createElement("a");
      link.target = "_blank";
      link.download = object;

      link.href = URL.createObjectURL(new Blob([data], { type: "file/pdf" }));
      link.click();
    } else {
      Toast(data, "error");
    }
  };
  useEffect(async () => {
    const invoiceData = await GetAllFilesAPI();
    //console.log("invoiceData    ", invoiceData);
    if (invoiceData.length > 0) {
      const newData = invoiceData.map((data) => ({
        email: data.email,
        firstName: data.firstName ? data.firstName : "-",
        lastName: data.lastName ? data.lastName : "-",
        accountNumber: data.accountNumber,
        fileName: data.fileName,
        options: (
          <button
            className="p-1 btn btn-sm btn-primary"
            onClick={() => downloadFile(data.uniqueFileName)}
          >
            {" "}
            Download{" "}
          </button>
        ),
      }));

      if (newData.length > 0)
        //console.log(newData);
        setTableData(newData);
      setIsWaiting(false);
    }
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
          Header: "First Name",
          accessor: "firstName",
        },
        {
          Header: "Last Name",
          accessor: "lastName",
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
    <DashboardLayout title="Invoices">
      {isWaiting === true ? (
        <Spinner />
      ) : (
        <ReactTable tableData={tableData} columns={columns} searchTag={false} />
      )}
    </DashboardLayout>
  );
};

export default LoginLogs;
