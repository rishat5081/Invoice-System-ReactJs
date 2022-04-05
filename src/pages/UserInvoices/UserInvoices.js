import { useState, useEffect, useContext, useCallback } from "react";
import { DashboardLayout } from "layouts";
import {
  Table,
  TableLink,
  Forms,
  SubmitButton,
  UL,
  Li,
  Toast,
} from "components";
import { ModalContext } from "store/modalContext";
import { DrawerContext } from "store/drawerContext";
import { table } from "constants/pages/invoiceManagement";
import * as S from "./styles";
import readXlsxFile from "read-excel-file";
import { FileUploader } from "react-drag-drop-files";

//functionnal component
const UserInvoices = () => {
  // This state will be fetch from API, for now it's constant from file.
  const [file, setFile] = useState(null);
  // const [file, setFile] = useState(null);
  const fileTypes = ["CSV", "XLS", "XLSX"];
  const handleChange = async (file) => {
    setFile(file);
    const pdfFileData = await readXlsxFile(file[0])
      .then((rows) => {
        if (rows) {
          console.log(rows);
          return rows;
        } else null;
      })
      .catch((err) => {
        if (err) {
          Toast("Error Reading the file", "error");
          console.log(err);
          return null;
        }
      });

    if (pdfFileData) {
      let index = pdfFileData[0].findIndex((file) => file === "PDF_file_name");
      const newPDFData = pdfFileData.slice(1);
      console.log("Index - ", index);

      let pdfFileNames = [];
      const sum = newPDFData.forEach((array, indesx) => {
        array.forEach((column, columnIndex) => {
          if (index === columnIndex) pdfFileNames.push(column);
        });
      });

      console.log("===", pdfFileNames);
    }
  };

  const fileTypesPDF = ["PDF"];

  const handleChangePDF = async (file) => {};
  const deleteFile = (id) => {
    console.log(id);
  };

  const handleSubmit = async () => {
    console.log("========file ========", file);

    const input = file[0];

    readXlsxFile(input).then((rows) => {
      // `rows` is an array of rows
      // each row being an array of cells.

      console.log(rows);
    });
  };

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
        <div className="col-6 ml-5">
          <div className="text-center font-weight-bold mb-3">
            <h1> PDF Invoice</h1>
          </div>
          {file === null ? (
            <div className="text-center font-weight-bold">
              <h1> No XLSX, CSV File Selected</h1>
            </div>
          ) : (
            <div className="">
              <FileUploader
                multiple={true}
                handleChange={handleChangePDF}
                name="file"
                types={fileTypesPDF}
              />
              <p className="mt-4">
                {file ? `Selected file: ${file[0].name}` : ""}
              </p>
            </div>
            // <Li
            //   className=" border p-2 bg-transparent"
            //   name={"asdljka"}
            //   deleteList={deleteFile}
            //   id={"asdljka"}
            // />
          )}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default UserInvoices;
