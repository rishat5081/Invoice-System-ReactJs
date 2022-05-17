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
      {console.log(globalFilter)}
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
        <select
          value={pageSize}
          onChange={(e) => {
            setPageSize(Number(e.target.value));
          }}
        >
          {[10, 20, 30, 40, 50].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
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
  const data = [
    {
      firstName: "girl",
      lastName: "bedroom",
      age: 22,
      visits: 60,
      progress: 74,
      status: "relationship",
      subRows: undefined,
    },
    {
      firstName: "girl",
      lastName: "bedroom",
      age: 22,
      visits: 60,
      progress: 74,
      status: "relationship",
      subRows: undefined,
    },
    {
      firstName: "girl",
      lastName: "bedroom",
      age: 22,
      visits: 60,
      progress: 74,
      status: "relationship",
      subRows: undefined,
    },
    {
      firstName: "girl",
      lastName: "bedroom",
      age: 22,
      visits: 60,
      progress: 74,
      status: "relationship",
      subRows: undefined,
    },
    {
      firstName: "girl",
      lastName: "bedroom",
      age: 22,
      visits: 60,
      progress: 74,
      status: "relationship",
      subRows: undefined,
    },
    {
      firstName: "girl",
      lastName: "bedroom",
      age: 22,
      visits: 60,
      progress: 74,
      status: "relationship",
      subRows: undefined,
    },
    {
      firstName: "girl",
      lastName: "bedroom",
      age: 22,
      visits: 60,
      progress: 74,
      status: "relationship",
      subRows: undefined,
    },
    {
      firstName: "girl",
      lastName: "bedroom",
      age: 22,
      visits: 60,
      progress: 74,
      status: "relationship",
      subRows: undefined,
    },
    {
      firstName: "girl",
      lastName: "bedroom",
      age: 22,
      visits: 60,
      progress: 74,
      status: "relationship",
      subRows: undefined,
    },
    {
      firstName: "girl",
      lastName: "bedroom",
      age: 22,
      visits: 60,
      progress: 74,
      status: "relationship",
      subRows: undefined,
    },
  ];
  const columns = React.useMemo(
    () => [
      {
        Header: "Name",
        columns: [
          {
            Header: "First Name",
            accessor: "firstName",
          },
          {
            Header: "Last Name",
            accessor: "lastName",
            // Use our custom `fuzzyText` filter on this column
          },
        ],
      },
      {
        Header: "Info",
        columns: [
          {
            Header: "Age",
            accessor: "age",
            filter: "equals",
          },
          {
            Header: "Visits",
            accessor: "visits",
          },
          {
            Header: "Status",
            accessor: "status",
            filter: "includes",
          },
          {
            Header: "Profile Progress",
            accessor: "progress",
          },
        ],
      },
    ],
    []
  );

  // const data = React.useMemo(() => makeData(100), []);
  // const [data, setData] = React.useState(makeData(100));

  // React.useEffect(() => {
  //   setData(makeData(100));
  // }, []);
  // const handleReset = () => {
  //   setData(makeData(100));
  // };

  return (
    <Styles>
      <button onClick={handleReset}>Reset Data</button>
      <Table columns={columns} data={data} />
    </Styles>
  );
}

export default App;
