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
import {
  UploadInvoicesFilesAPI,
  UploadNewAccountsFileDetailsAPI,
} from "../../Axios APIs/UserFiles/userFiles";
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
        pdfFile.fileName.toUpperCase().toString() ===
        file.name.toUpperCase().toString()
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
      let neewFiles = [];
      pdfFileNamesState.forEach((item, i) => {
        uploadPdfFilesState.forEach((itemss, i) => {
          // console.log("-----", itemss);
          const nameee = itemss.name.split(".");
          if (nameee[0].toString() === item?.fileName.toString()) {
            const file = new File([itemss], item.uniqueFileName);
            neewFiles.push(file);
          }
        });
      });

      const formData = new FormData();
      neewFiles.forEach((item, i) => {
        formData.append("file", item);
      });

      const apiStatus = await UploadInvoicesFilesAPI(formData)
        .then((value) => {
          Toast(value, "success");
        })
        .catch((err) => {
          Toast(err, "error");
        });
      const apiStatuss = await UploadNewAccountsFileDetailsAPI(
        pdfFileNamesState
      )
        .then((value) => {
          Toast(value, "success");
        })
        .catch((err) => {
          Toast(err, "error");
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
      let indexInvoiceNumber = pdfFileData[0].findIndex(
        (file) => file === "InvoiceNumber"
      );
      let indexTotal = pdfFileData[0].findIndex(
        (file) => file === "Invoice Total"
      );
      let indexInvoiceDate = pdfFileData[0].findIndex(
        (file) => file === "Invoice Date"
      );
      let indexInvoiceDue = pdfFileData[0].findIndex(
        (file) => file === "Invoice Due Date"
      );
      let indexAccountNumber = pdfFileData[0].findIndex(
        (file) => file === "UKWAccountNumber"
      );

      const newPDFData = pdfFileData.slice(1);

      // let pdfFileNames = [];
      let pdfFileNames = [];
      const sum = newPDFData.forEach((array, indesx) => {
        var object = {};
        array.forEach((column, columnIndex) => {
          const date = new Date();
          if (index === columnIndex) {
            object["uniqueFileName"] = column + columnIndex + Date.now(date); //Object.assign({ FileName: column }, object);
            object["fileName"] = column; //Object.assign({ FileName: column }, object);
          }
          if (indexAccountNumber === columnIndex)
            object["accountNumber"] = column;
          if (indexInvoiceNumber === columnIndex)
            object["invoiceNumber"] = column;
          if (indexInvoiceDate === columnIndex) object["invoiceDate"] = column;
          if (indexTotal === columnIndex) object["invoiceTotal"] = column;
          if (indexInvoiceDue === columnIndex) object["invoiceDue"] = column;
        });
        pdfFileNames.push(object);
      });
      setPdfFileNamesState(pdfFileNames);

      if (pdfFileNames.length === 0) {
        Toast("No Inovice List Found in this File", "error");
        setFile(null);
      }
      console.log("===", pdfFileNames);
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
