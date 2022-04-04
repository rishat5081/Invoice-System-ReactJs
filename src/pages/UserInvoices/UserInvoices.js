import { useState, useEffect, useContext, useCallback } from "react";

import { DashboardLayout } from "layouts";
import { Table, TableLink, Forms, SubmitButton } from "components";

import { ModalContext } from "store/modalContext";
import { DrawerContext } from "store/drawerContext";
import { table } from "constants/pages/invoiceManagement";
import * as S from "./styles";

import { FileUploader } from "react-drag-drop-files";
const InvoiceManagement = () => {
  // This state will be fetch from API, for now it's constant from file.
  const [tableData, setTableData] = useState(table.data);
  const [transformedTableData, setTransformedTableData] = useState([]);
  const [isTableTransformed, setIsTableTransformed] = useState(false);
  const { onShow: showModal } = useContext(ModalContext);
  const { onShow: showDrawer } = useContext(DrawerContext);

  function convertData_Array(str, delimiter = ",") {
    const headers = str.slice(0, str.indexOf("\n")).split(delimiter);
    const rows = str.slice(str.indexOf("\n") + 1).split("\n");
    const rowsInfo = rows.map((row) => row.split(","));
    // return the header and rowsInfo
    return { headers, rowsInfo };
  }
  const handleSubmit = () => {
    console.log("========file ========", file);

    const input = file[0];
    const reader = new FileReader();
    reader.onload = (event) => {
      console.log("event.target.result", event.target.result);
      // const { headers, rowsInfo } = convertData_Array(event.target.result);
      // console.log("event :", event);
      // console.log("-==== headers ", headers);
      // console.log("-==== rowsInfo ", rowsInfo);
    };
    reader.readAsText(input);
    // onAddInvoice({
    //   col1: supplierName,
    //   col2: "ACV Gummies",
    //   col3: "Invoice",
    //   col4: "105",
    //   col5: "dueDate",
    //   col6: `$invoiceAmount}`,
    //   col7: `$paidAmount}`,
    //   col8: "status",
    //   col9: attachment[0]?.name || "No file uploaded",
    //   col10: "See notes",
    // });
    // onHide();
  };
  const [file, setFile] = useState(null);
  const handleChange = (file) => {
    setFile(file);
  };
  const fileTypes = ["CSV", "XLS", "XLSX"];

  return (
    <DashboardLayout title="User Invoices">
      <div className="row">
        <div className="col-6">
          <div className="">
            <FileUploader
              multiple={true}
              handleChange={handleChange}
              name="file"
              types={fileTypes}
            />
            <p className="mt-4">
              {file ? `Selected file: ${file[0].name}` : ""}
            </p>
          </div>
          <div className="col-2">
            <SubmitButton onClick={handleSubmit}> Submit </SubmitButton>
          </div>
        </div>

        <div className="col-6 mt-2">
          <ul>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
          </ul>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default InvoiceManagement;
