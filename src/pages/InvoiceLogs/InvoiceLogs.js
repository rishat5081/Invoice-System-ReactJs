import { useContext, useState, useEffect } from "react";
import { DashboardLayout } from "layouts";
import { Toast, ReactTable, Spinner } from "components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faCircleMinus, faTrash } from "@fortawesome/free-solid-svg-icons";
import * as S from "./styles";
import { DownloadInvoiceFilesLogsAPI } from "../../Axios APIs/UserFiles/userFiles";
const InvoiceLogs = () => {
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
    const data = await DownloadInvoiceFilesLogsAPI();
    if (data.length > 0) {
      console.log("Use Effect -----", data);
      const newData = data.map((object) => ({
        firstName: object.firstName,
        lastName: object.lastName,
        downloadFileName: object.downloadFileName,
        logTime: object.logTime,
      }));
      setTableData(newData);
      setIsWaiting(false);
    }

    // const newData = [
    //   {
    //     email: "User Email",
    //     invoice: "Invoice ID or Invoice",
    //     date: "Date of Download",
    //   },
    //
    //   {
    //     email: "User Email",
    //     invoice: "Invoice ID or Invoice",
    //     date: "Date of Download",
    //   },
    //   {
    //     email: "User Email",
    //     invoice: "Invoice ID or Invoice",
    //     date: "Date of Download",
    //   },
    //   {
    //     email: "User Email",
    //     invoice: "Invoice ID or Invoice",
    //     date: "Date of Download",
    //   },
    //   {
    //     email: "User Email",
    //     invoice: "Invoice ID or Invoice",
    //     date: "Date of Download",
    //   },
    //   {
    //     email: "User Email",
    //     invoice: "Invoice ID or Invoice",
    //     date: "Date of Download",
    //   },
    //   {
    //     email: "User Email",
    //     invoice: "Invoice ID or Invoice",
    //     date: "Date of Download",
    //   },
    //   {
    //     email: "User Email",
    //     invoice: "Invoice ID or Invoice",
    //     date: "Date of Download",
    //   },
    //   {
    //     email: "User Email",
    //     invoice: "Invoice ID or Invoice",
    //     date: "Date of Download",
    //   },
    //   {
    //     email: "User Email",
    //     invoice: "Invoice ID or Invoice",
    //     date: "Date of Download",
    //   },
    //   {
    //     email: "User Email",
    //     invoice: "Invoice ID or Invoice",
    //     date: "Date of Download",
    //   },
    //   {
    //     email: "User Email",
    //     invoice: "Invoice ID or Invoice",
    //     date: "Date of Download",
    //   },
    //   {
    //     email: "User Email",
    //     invoice: "Invoice ID or Invoice",
    //     date: "Date of Download",
    //   },
    //   {
    //     email: "User Email",
    //     invoice: "Invoice ID or Invoice",
    //     date: "Date of Download",
    //   },
    //   {
    //     email: "User Email",
    //     invoice: "Invoice ID or Invoice",
    //     date: "Date of Download",
    //   },
    //   {
    //     email: "User Email",
    //     invoice: "Invoice ID or Invoice",
    //     date: "Date of Download",
    //   },
    //   {
    //     email: "User Email",
    //     invoice: "Invoice ID or Invoice",
    //     date: "Date of Download",
    //   },
    //   {
    //     email: "User Email",
    //     invoice: "Invoice ID or Invoice",
    //     date: "Date of Download",
    //   },
    //   {
    //     email: "User Email",
    //     invoice: "Invoice ID or Invoice",
    //     date: "Date of Download",
    //   },
    //   {
    //     email: "User Email",
    //     invoice: "Invoice ID or Invoice",
    //     date: "Date of Download",
    //   },
    //   {
    //     email: "User Email",
    //     invoice: "Invoice ID or Invoice",
    //     date: "Date of Download",
    //   },
    //   {
    //     email: "User Email",
    //     invoice: "Invoice ID or Invoice",
    //     date: "Date of Download",
    //   },
    // ];
    //
    // setTableData(newData);
    setIsWaiting(false);
  }, [updateAccountState]);

  const columns = [
    {
      Header: " ",
      columns: [
        {
          Header: "First Name",
          accessor: "firstName",
        },
        {
          Header: "Last Name",
          accessor: "lastName",
        },
        {
          Header: "File Name",
          accessor: "downloadFileName",
        },
        {
          Header: "Date",
          accessor: "logTime",
        },
      ],
    },
  ];
  return (
    <DashboardLayout title="Invoice Logs">
      {isWaiting === true ? (
        <Spinner />
      ) : (
        <ReactTable tableData={tableData} columns={columns} searchTag={false} />
      )}
    </DashboardLayout>
  );
};

export default InvoiceLogs;
