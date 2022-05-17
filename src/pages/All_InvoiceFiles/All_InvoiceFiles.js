import { useContext, useState, useEffect } from "react";
import { DashboardLayout } from "layouts";
import { Toast, ReactTable, Spinner } from "components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faCircleMinus, faTrash } from "@fortawesome/free-solid-svg-icons";
import * as S from "./styles";
import {
  CreateAccountfromFileAPI,
  GetAllAccountAPI,
} from "../../Axios APIs/Accounts/accounts";
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
    // const data = await GetAllAccountAPI();
    // if (data.length > 0) {
    //   const newData = [
    //     {
    //       email: "Login User Email",
    //       date: "Login User Date & Time",
    //       companyName: "obj.companyName",
    //       options: (
    //         <button
    //           className="p-1 btn btn-sm btn-primary"
    //           onClick={() => deleteLoginRecord("obj.id")}
    //         >
    //           {" "}
    //           Update{" "}
    //         </button>
    //       ),
    //     },
    //   ];
    //   setTableData(newData);
    //   setIsWaiting(false);
    // }

    const newData = [
      {
        email: "Login User Email",
        date: "Login User Date & Time",
      },
      {
        email: "Login User Email",
        date: "Login User Date & Time",
      },
      {
        email: "Login User Email",
        date: "Login User Date & Time",
      },
      {
        email: "Login User Email",
        date: "Login User Date & Time",
      },
      {
        email: "Login User Email",
        date: "Login User Date & Time",
      },
      {
        email: "Login User Email",
        date: "Login User Date & Time",
      },
      {
        email: "Login User Email",
        date: "Login User Date & Time",
      },
      {
        email: "Login User Email",
        date: "Login User Date & Time",
      },
      {
        email: "Login User Email",
        date: "Login User Date & Time",
      },
      {
        email: "Login User Email",
        date: "Login User Date & Time",
      },
      {
        email: "Login User Email",
        date: "Login User Date & Time",
      },
      {
        email: "Login User Email",
        date: "Login User Date & Time",
      },
      {
        email: "Login User Email",
        date: "Login User Date & Time",
      },
      {
        email: "Login User Email",
        date: "Login User Date & Time",
      },
      {
        email: "Login User Email",
        date: "Login User Date & Time",
      },
      {
        email: "Login User Email",
        date: "Login User Date & Time",
      },
      {
        email: "Login User Email",
        date: "Login User Date & Time",
      },
      {
        email: "Login User Email",
        date: "Login User Date & Time",
      },
      {
        email: "Login User Email",
        date: "Login User Date & Time",
      },
      {
        email: "Login User Email",
        date: "Login User Date & Time",
      },
      {
        email: "Saad",
        date: "Login User Date & Time",
      },
      {
        email: "Saad",
        date: "Login User Date & Time",
      },
      {
        email: "Saad",
        date: "Login User Date & Time",
      },
      {
        email: "Saad",
        date: "Login User Date & Time",
      },
      {
        email: "Saad",
        date: "Login User Date & Time",
      },
      {
        email: "Login User Email",
        date: "Login User Date & Time",
      },
      {
        email: "Login User Email",
        date: "Login User Date & Time",
      },
      {
        email: "Login User Email",
        date: "Login User Date & Time",
      },
      {
        email: "Login User Email",
        date: "Login User Date & Time",
      },
      {
        email: "Login User Email",
        date: "Login User Date & Time",
      },
    ];

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
          Header: "Date",
          accessor: "date",
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
