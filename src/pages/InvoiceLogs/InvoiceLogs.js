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
    console.log("Use Effect");
    // const data = await GetAllAccountAPI();
    // if (data.length > 0) {
    //   const newData = [
    //     {
    //       email: "obj.email",
    //       date: "obj.date",
    // invoice: "invoice",
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
        email: "User Email",
        invoice: "Invoice ID or Invoice",
        date: "Date of Download",
      },

      {
        email: "User Email",
        invoice: "Invoice ID or Invoice",
        date: "Date of Download",
      },
      {
        email: "User Email",
        invoice: "Invoice ID or Invoice",
        date: "Date of Download",
      },
      {
        email: "User Email",
        invoice: "Invoice ID or Invoice",
        date: "Date of Download",
      },
      {
        email: "User Email",
        invoice: "Invoice ID or Invoice",
        date: "Date of Download",
      },
      {
        email: "User Email",
        invoice: "Invoice ID or Invoice",
        date: "Date of Download",
      },
      {
        email: "User Email",
        invoice: "Invoice ID or Invoice",
        date: "Date of Download",
      },
      {
        email: "User Email",
        invoice: "Invoice ID or Invoice",
        date: "Date of Download",
      },
      {
        email: "User Email",
        invoice: "Invoice ID or Invoice",
        date: "Date of Download",
      },
      {
        email: "User Email",
        invoice: "Invoice ID or Invoice",
        date: "Date of Download",
      },
      {
        email: "User Email",
        invoice: "Invoice ID or Invoice",
        date: "Date of Download",
      },
      {
        email: "User Email",
        invoice: "Invoice ID or Invoice",
        date: "Date of Download",
      },
      {
        email: "User Email",
        invoice: "Invoice ID or Invoice",
        date: "Date of Download",
      },
      {
        email: "User Email",
        invoice: "Invoice ID or Invoice",
        date: "Date of Download",
      },
      {
        email: "User Email",
        invoice: "Invoice ID or Invoice",
        date: "Date of Download",
      },
      {
        email: "User Email",
        invoice: "Invoice ID or Invoice",
        date: "Date of Download",
      },
      {
        email: "User Email",
        invoice: "Invoice ID or Invoice",
        date: "Date of Download",
      },
      {
        email: "User Email",
        invoice: "Invoice ID or Invoice",
        date: "Date of Download",
      },
      {
        email: "User Email",
        invoice: "Invoice ID or Invoice",
        date: "Date of Download",
      },
      {
        email: "User Email",
        invoice: "Invoice ID or Invoice",
        date: "Date of Download",
      },
      {
        email: "User Email",
        invoice: "Invoice ID or Invoice",
        date: "Date of Download",
      },
      {
        email: "User Email",
        invoice: "Invoice ID or Invoice",
        date: "Date of Download",
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
          Header: "Invoice",
          accessor: "invoice",
        },
        {
          Header: "Date",
          accessor: "date",
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
