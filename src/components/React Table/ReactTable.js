import React from "react";
import styled from "styled-components";

import { useTable, usePagination, useGlobalFilter } from "react-table";
// function Table1({ columns, data, searchTag }) {
//   // Use the state and functions returned from useTable to build your UI
//   const {
//     getTableProps,
//     getTableBodyProps,
//     headerGroups,
//     prepareRow,
//     page, // Instead of using 'rows', we'll use page,
//     // which has only the rows for the active page
//
//     // The rest of these things are super handy, too ;)
//     canPreviousPage,
//     canNextPage,
//     pageOptions,
//     pageCount,
//     gotoPage,
//     nextPage,
//     previousPage,
//     setPageSize,
//     state: { pageIndex, pageSize },
//   } = useTable(
//     {
//       columns,
//       data,
//       initialState: { pageIndex: 0 },
//       searchTag,
//     },
//     usePagination
//   );
//
//   function myFunction() {
//     var input, filter, table, tr, td, i, txtValue;
//     input = document.getElementById("myInput");
//     filter = input.value.toUpperCase();
//     table = document.getElementById("myTable");
//     tr = table.getElementsByTagName("tr");
//     for (i = 0; i < tr.length; i++) {
//       td = tr[i].getElementsByTagName("td")[0];
//       if (td) {
//         txtValue = td.textContent || td.innerText;
//         if (txtValue.toUpperCase().indexOf(filter) > -1) {
//           tr[i].style.display = "";
//         } else {
//           tr[i].style.display = "none";
//         }
//       }
//     }
//   }
//   // Render the UI for your table
//   return (
//     <>
//       {searchTag ? (
//         <input
//           type="text"
//           id="myInput"
//           className="border  border-2 p-2"
//           onKeyUp={myFunction}
//           placeholder={searchTag}
//           title="Type in a name"
//         />
//       ) : (
//         ""
//       )}
//
//       <table id="myTable" className="table table-striped" {...getTableProps()}>
//         <thead className="text-center">
//           {headerGroups.map((headerGroup) => (
//             <tr
//               className="text-center fw-bold"
//               {...headerGroup.getHeaderGroupProps()}
//             >
//               {headerGroup.headers.map((column) => (
//                 <th
//                   scope="col"
//                   className="text-center"
//                   {...column.getHeaderProps()}
//                 >
//                   {column.render("Header")}
//                 </th>
//               ))}
//             </tr>
//           ))}
//         </thead>
//         <tbody {...getTableBodyProps()}>
//           {page.map((row, i) => {
//             prepareRow(row);
//             return (
//               <tr className="text-center" {...row.getRowProps()}>
//                 {row.cells.map((cell) => {
//                   return (
//                     <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
//                   );
//                 })}
//               </tr>
//             );
//           })}
//         </tbody>
//       </table>
//       {/*
//         Pagination can be built however you'd like.
//         This is just a very basic UI implementation:
//       */}
//
//       <div className="pagination">
//         <button
//           className="p-2 page-item"
//           onClick={() => gotoPage(0)}
//           disabled={!canPreviousPage}
//         >
//           {"<<"}
//         </button>
//         <button
//           className="p-2 page-item"
//           onClick={() => previousPage()}
//           disabled={!canPreviousPage}
//         >
//           {"<"}
//         </button>
//         <button
//           className="p-2 page-item"
//           onClick={() => nextPage()}
//           disabled={!canNextPage}
//         >
//           {">"}
//         </button>
//         <button
//           className="p-2 page-item"
//           onClick={() => gotoPage(pageCount - 1)}
//           disabled={!canNextPage}
//         >
//           {">>"}
//         </button>
//         <span className="p-2 page-item">
//           Page
//           <strong>
//             {pageIndex + 1} of {pageOptions.length}
//           </strong>
//         </span>
//         <select
//           value={pageSize}
//           onChange={(e) => {
//             setPageSize(Number(e.target.value));
//           }}
//         >
//           {[10, 20, 30, 40, 50].map((pageSize) => (
//             <option key={pageSize} value={pageSize}>
//               Show {pageSize}
//             </option>
//           ))}
//         </select>
//       </div>
//     </>
//   );
// }

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
      <label htmlFor="search" placeholder="Search " className="p-2">
        {" "}
        Search{" "}
      </label>
      <input
        className="p-2 border border-dark"
        name="search"
        type="text"
        value={globalFilter || ""}
        onChange={(e) => setGlobalFilter(e.target.value)}
      />
      <table className="table table-striped" {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr
              className="text-center fw-bold"
              {...headerGroup.getHeaderGroupProps()}
            >
              {headerGroup.headers.map((column) => (
                <th
                  scope="col"
                  className="text-center"
                  {...column.getHeaderProps()}
                >
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
              <tr className="text-center" {...row.getRowProps()}>
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
        <button
          className="p-2 page-item"
          onClick={() => gotoPage(0)}
          disabled={!canPreviousPage}
        >
          {"<<"}
        </button>{" "}
        <button
          className="p-2 page-item"
          onClick={() => previousPage()}
          disabled={!canPreviousPage}
        >
          {"<"}
        </button>{" "}
        <button
          className="p-2 page-item"
          onClick={() => nextPage()}
          disabled={!canNextPage}
        >
          {">"}
        </button>{" "}
        <button
          className="p-2 page-item"
          onClick={() => gotoPage(pageCount - 1)}
          disabled={!canNextPage}
        >
          {">>"}
        </button>{" "}
        <span className="p-2 page-item">
          Page{" "}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>{" "}
        </span>
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

export default function App({ tableData, columns, searchTag }) {
  return <Table columns={columns} data={tableData} />;
}
