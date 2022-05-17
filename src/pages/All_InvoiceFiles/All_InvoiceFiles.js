// import { useContext, useState, useEffect } from "react";
// import { DashboardLayout } from "layouts";
// import { Toast, ReactTable, Spinner } from "components";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//
// import { faCircleMinus, faTrash } from "@fortawesome/free-solid-svg-icons";
// import * as S from "./styles";
// import {
//   CreateAccountfromFileAPI,
//   GetAllAccountAPI,
// } from "../../Axios APIs/Accounts/accounts";
// const LoginLogs = () => {
//   const [isWaiting, setIsWaiting] = useState(true);
//   const [updateAccountState, setUpdateAccountState] = useState(false);
//   const [tableData, setTableData] = useState([]);
//
//   //child function
//   const updateAccount = (object) => {
//     setUpdateAccountState(true);
//   };
//   const deleteLoginRecord = (object) => {
//     console.log(object);
//   };
//   useEffect(async () => {
//     // const data = await GetAllAccountAPI();
//     // if (data.length > 0) {
//     //   const newData = [
//     //     {
//     //       email: "Login User Email",
//     //       date: "Login User Date & Time",
//     //       companyName: "obj.companyName",
//     //       options: (
//     //         <button
//     //           className="p-1 btn btn-sm btn-primary"
//     //           onClick={() => deleteLoginRecord("obj.id")}
//     //         >
//     //           {" "}
//     //           Update{" "}
//     //         </button>
//     //       ),
//     //     },
//     //   ];
//     //   setTableData(newData);
//     //   setIsWaiting(false);
//     // }
//
//     const newData = [
//       {
//         email: "Login User Email",
//         date: "Login User Date & Time",
//       },
//       {
//         email: "Login User Email",
//         date: "Login User Date & Time",
//       },
//       {
//         email: "Login User Email",
//         date: "Login User Date & Time",
//       },
//       {
//         email: "Login User Email",
//         date: "Login User Date & Time",
//       },
//       {
//         email: "Login User Email",
//         date: "Login User Date & Time",
//       },
//       {
//         email: "Login User Email",
//         date: "Login User Date & Time",
//       },
//       {
//         email: "Login User Email",
//         date: "Login User Date & Time",
//       },
//       {
//         email: "Login User Email",
//         date: "Login User Date & Time",
//       },
//       {
//         email: "Login User Email",
//         date: "Login User Date & Time",
//       },
//       {
//         email: "Login User Email",
//         date: "Login User Date & Time",
//       },
//       {
//         email: "Login User Email",
//         date: "Login User Date & Time",
//       },
//       {
//         email: "Login User Email",
//         date: "Login User Date & Time",
//       },
//       {
//         email: "Login User Email",
//         date: "Login User Date & Time",
//       },
//       {
//         email: "Login User Email",
//         date: "Login User Date & Time",
//       },
//       {
//         email: "Login User Email",
//         date: "Login User Date & Time",
//       },
//       {
//         email: "Login User Email",
//         date: "Login User Date & Time",
//       },
//       {
//         email: "Login User Email",
//         date: "Login User Date & Time",
//       },
//       {
//         email: "Login User Email",
//         date: "Login User Date & Time",
//       },
//       {
//         email: "Login User Email",
//         date: "Login User Date & Time",
//       },
//       {
//         email: "Login User Email",
//         date: "Login User Date & Time",
//       },
//       {
//         email: "Saad",
//         date: "Login User Date & Time",
//       },
//       {
//         email: "Saad",
//         date: "Login User Date & Time",
//       },
//       {
//         email: "Saad",
//         date: "Login User Date & Time",
//       },
//       {
//         email: "Saad",
//         date: "Login User Date & Time",
//       },
//       {
//         email: "Saad",
//         date: "Login User Date & Time",
//       },
//       {
//         email: "Login User Email",
//         date: "Login User Date & Time",
//       },
//       {
//         email: "Login User Email",
//         date: "Login User Date & Time",
//       },
//       {
//         email: "Login User Email",
//         date: "Login User Date & Time",
//       },
//       {
//         email: "Login User Email",
//         date: "Login User Date & Time",
//       },
//       {
//         email: "Login User Email",
//         date: "Login User Date & Time",
//       },
//     ];
//
//     setTableData(newData);
//     setIsWaiting(false);
//   }, [updateAccountState]);
//
//   const columns = [
//     {
//       Header: " ",
//       columns: [
//         {
//           Header: "Email",
//           accessor: "email",
//         },
//         {
//           Header: "Date",
//           accessor: "date",
//         },
//       ],
//     },
//   ];
//   return (
//     <DashboardLayout title="Login Logs">
//       {isWaiting === true ? (
//         <Spinner />
//       ) : (
//         <ReactTable tableData={tableData} columns={columns} searchTag={false} />
//       )}
//     </DashboardLayout>
//   );
// };
//
// export default LoginLogs;

import React from "react";
import styled from "styled-components";
import { useTable, usePagination, useGlobalFilter } from "react-table";

const Styles = styled.div`
  padding: 1rem;

  table {
    border-spacing: 0;
    border: 1px solid black;

    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }

    th,
    td {
      margin: 0;
      padding: 0.5rem;
      border-bottom: 1px solid black;
      border-right: 1px solid black;

      :last-child {
        border-right: 0;
      }
    }
  }
`;

// Our table component
function Table({ columns, data }) {
  const props = useTable(
    {
      columns,
      data,
    },
    useGlobalFilter, // useGlobalFilter!
    usePagination
  );
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    setGlobalFilter,
    state,
    page, // Instead of using 'rows', we'll use page,
    // which has only the rows for the active page

    // The rest of these things are super handy, too ;)
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize, globalFilter },
  } = props;
  console.log(props);
  React.useEffect(() => {
    // props.dispatch({ type: actions.resetPage })
    console.log(globalFilter);
  }, [globalFilter]);

  return (
    <>
      <input
        type="text"
        value={globalFilter || ""}
        onChange={(e) => setGlobalFilter(e.target.value)}
      />
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>
                  {column.render("Header")}
                  {/* Render the columns filter UI */}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row, i) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="pagination">
        <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
          {"<<"}
        </button>{" "}
        <button onClick={() => previousPage()} disabled={!canPreviousPage}>
          {"<"}
        </button>{" "}
        <button onClick={() => nextPage()} disabled={!canNextPage}>
          {">"}
        </button>{" "}
        <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
          {">>"}
        </button>{" "}
        <span>
          Page{" "}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>{" "}
        </span>
        <span>
          | Go to page:{" "}
          <input
            type="number"
            defaultValue={pageIndex + 1}
            onChange={(e) => {
              const page = e.target.value ? Number(e.target.value) - 1 : 0;
              gotoPage(page);
            }}
            style={{ width: "100px" }}
          />
        </span>{" "}
      </div>

      <br />
      <div>Showing the first 20 results of {rows.length} rows</div>
      <div>
        <pre>
          <code>{JSON.stringify(state.filters, null, 2)}</code>
        </pre>
      </div>
    </>
  );
}

function App() {
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

  const data = [
    {
      email: "girl",
      date: "bedroom",
    },
    {
      email: "girl",
      date: "bedroom",
    },
    {
      email: "girl",
      date: "bedroom",
    },
    {
      email: "girl",
      date: "bedroom",
    },
    {
      email: "girl",
      date: "bedroom",
    },
    {
      email: "girl",
      date: "bedroom",
    },
    {
      email: "girl",
      date: "bedroom",
    },
    {
      email: "girl",
      date: "bedroom",
    },
    {
      email: "girl",
      date: "bedroom",
    },
    {
      email: "Saad",
      date: "bedroom",
    },
    {
      email: "Saad",
      date: "bedroom",
    },
    {
      email: "Saad",
      date: "bedroom",
    },
    {
      email: "Saad",
      date: "bedroom",
    },
    {
      email: "Saad",
      date: "bedroom",
    },
    {
      email: "Saad",
      date: "bedroom",
    },
    {
      email: "123",
      date: "bedroom",
    },
    {
      email: "Saad1",
      date: "bedroom",
    },
  ];

  // // const columns = React.useMemo(
  //   () => [
  //     {
  //       Header: "Info",
  //       columns: [
  //         {
  //           Header: "Age",
  //           accessor: "age",
  //           filter: "equals",
  //         },
  //         {
  //           Header: "Visits",
  //           accessor: "visits",
  //         },
  //         {
  //           Header: "Status",
  //           accessor: "status",
  //           filter: "includes",
  //         },
  //         {
  //           Header: "Profile Progress",
  //           accessor: "progress",
  //         },
  //       ],
  //     },
  //   ],
  //   []
  // );

  // const data = React.useMemo(() => makeData(100), []);
  // const [data, setData] = React.useState(makeData(100));

  // React.useEffect(() => {
  //   setData(makeData(100));
  // }, []);
  const handleReset = () => {
    setData(makeData(100));
  };

  return (
    <Styles>
      <button onClick={handleReset}>Reset Data</button>
      <Table columns={columns} data={data} />
    </Styles>
  );
}

export default App;
