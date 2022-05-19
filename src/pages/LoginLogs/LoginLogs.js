import { useContext, useState, useEffect } from "react";
import { DashboardLayout } from "layouts";
import { Toast, ReactTable, Spinner } from "components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faCircleMinus, faTrash } from "@fortawesome/free-solid-svg-icons";
import * as S from "./styles";
import { UserLoginLogsAPI } from "../../Axios APIs/UserFiles/userFiles";
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
    const data = await UserLoginLogsAPI();
    if (data.length > 0) {
      const newData = data.map((object) => ({
        firstName: object.firstName,
        lastName: object.lastName,
        logIp: object.logIp,
        logTime: object.logTime,
      }));
      setTableData(newData);
      setIsWaiting(false);
    } else {
      Toast("No Record Found", "error");
      setIsWaiting(false);
    }
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
          Header: "Ip Address",
          accessor: "logIp",
        },
        {
          Header: "Date",
          accessor: "logTime",
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
