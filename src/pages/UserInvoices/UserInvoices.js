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
import { UploadInvoicesFilesAPI } from "../../Axios APIs/UserFiles/userFiles";
import * as S from "./styles";
import readXlsxFile from "read-excel-file";
import { FileUploader } from "react-drag-drop-files";

//functionnal component
const UserInvoices = () => {
  // This state will be fetch from API, for now it's constant from file.
  const [file, setFile] = useState(null);
  const [pdfFiles, setPdfFiles] = useState(null);
  const [pdfFileNamesState, setPdfFileNamesState] = useState([]);
  const [uploadPdfFilesState, setUploadPdfFilesState] = useState([]);
  // const [file, setFile] = useState(null);
  const fileTypes = ["CSV", "XLS", "XLSX"];

  //handling the excel file
  const handleChange = async (file) => setFile(file);

  const fileTypesPDF = ["PDF"];

  //handling the PDF invoices
  const handleChangePDF = async (file) => {
    const checkFileName = pdfFileNamesState.find(
      (pdfFile) =>
        pdfFile.toUpperCase().toString() === file.name.toUpperCase().toString()
    );

    setUploadPdfFilesState((prev) => [...prev, file]);
    console.log("uploadPdfFilesState", uploadPdfFilesState);
    // if (checkFileName) setUploadPdfFilesState((prev) => [...prev, file]);
    // else Toast("Invoice File Name Must be Same as Excel", "error");
  };
  const handleSubmitofPDFFiles = async () => {
    if (pdfFileNamesState.length !== uploadPdfFilesState.length) {
      Toast(
        `Invoice count must be equal to '${pdfFileNamesState.length}'`,
        "error"
      );
      return;
    } else {
      const formData = new FormData();
      formData.append("file", uploadPdfFilesState);
      formData.append("data", JSON.stringify(pdfFileNamesState));

      const apiStatus = await UploadInvoicesFilesAPI(formData)
        .then((value) => {
          console.log("vvvv", value);
        })
        .catch((err) => {
          console.log("err", err);
        });
    }
  };

  //handling the submit of the xls file
  const handleSubmit = async () => {
    //console.log("---fidasdsale-", file);
    const pdfFileData = await readXlsxFile(file)
      .then((rows) => {
        if (rows) {
          //console.log(rows);
          return rows;
        } else null;
      })
      .catch((err) => {
        if (err) {
          Toast("Error Reading the file", "error");
          //console.log(err);
          return null;
        }
      });

    if (pdfFileData) {
      let index = pdfFileData[0].findIndex((file) => file === "PDF_file_name");
      const newPDFData = pdfFileData.slice(1);

      let pdfFileNames = [];
      const sum = newPDFData.forEach((array, indesx) => {
        array.forEach((column, columnIndex) => {
          if (index === columnIndex) pdfFileNames.push(column);
        });
      });

      setPdfFileNamesState(pdfFileNames);

      if (pdfFileNames.length === 0) {
        Toast("No Inovice List Found in this File", "error");
        setFile(null);
      }
      //console.log("===", pdfFileNames);
    }
  };

  return (
    <DashboardLayout title="User Invoices">
      <div className="row">
        <div>
          <div className="true">
            <FileUploader
              multiple={false}
              handleChange={handleChange}
              name="file"
              types={fileTypes}
            />
            <p className="mt-4">{file ? `Selected file: ${file.name}` : ""}</p>
          </div>
          <div className="col-2 mt-4 mb-4">
            <SubmitButton onClick={handleSubmit}> Submit </SubmitButton>
          </div>
          <hr />
        </div>
      </div>
      <div className="col-6 ml-5">
        <div className="text-center font-bold mb-3">
          <h1> PDF Invoice</h1>
        </div>
        {pdfFileNamesState.length === 0 ? (
          <div className="text-center font-bold text-bold">
            <h1> No XLSX, CSV File Selected</h1>
          </div>
        ) : (
          <div className="">
            {pdfFileNamesState.length === 0 ? (
              ""
            ) : (
              <div className="m-3">
                <h1>
                  Total Invoices should be {uploadPdfFilesState.length} /
                  {pdfFileNamesState.length}
                </h1>
              </div>
            )}
            <FileUploader
              multiple={false}
              handleChange={handleChangePDF}
              name="file"
              types={fileTypesPDF}
            />
            <p className="mt-4">
              {pdfFiles ? `Selected file: ${pdfFiles[0].name}` : ""}
            </p>

            <div className="col-2 mt-4 mb-4">
              <SubmitButton onClick={handleSubmitofPDFFiles}>
                {" "}
                Submit{" "}
              </SubmitButton>
            </div>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
};

export default UserInvoices;
