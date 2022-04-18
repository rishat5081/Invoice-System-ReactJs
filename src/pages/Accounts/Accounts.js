import { useContext, useState, useEffect } from "react";

import { DashboardLayout } from "layouts";
import {
  Table,
  Search,
  ReactSelect,
  Supplier,
  TableLink,
  Forms,
  Toast,
  ReactTable,
  Spinner,
} from "components";
import { ModalContext } from "store/modalContext";
import { DrawerContext } from "store/drawerContext";
import { table } from "constants/pages/supplierManagement";
import * as S from "./styles";
import { FileUploader } from "react-drag-drop-files";
import readXlsxFile from "read-excel-file";
import {
  CreateAccountfromFileAPI,
  GetAllAccountAPI,
} from "../../Axios APIs/Accounts/accounts";
const Accounts = () => {
  const { onShow: showModal } = useContext(ModalContext);
  const [isWaiting, setIsWaiting] = useState(true);
  const [file, setFile] = useState(null);
  const [tableData, setTableData] = useState([]);
  // const [file, setFile] = useState(null);
  const fileTypes = ["CSV", "XLS", "XLSX"];
  const companyName = "Company";
  const account = "Account";
  const accountType = "Account Type";
  const businessName = "Business Name";
  const name = "Name";
  const contact = "Contact";
  const email = "Email";

  let companyNameIndex = 0;
  let accountIndex = 0;
  let accountTypeIndex = 0;
  let businessNameIndex = 0;
  let nameIndex = 0;
  let contactIndex = 0;
  let emailIndex = 0;

  //model for creating the new account

  const topbarAction = {
    name: "Create an Account",
    onClick: () => {
      showModal({
        content: <Forms.CreateNewAccount />,
        title: "Create New Account",
      });
    },
  };

  //on selecting the file
  const handleChange = async (file) => {
    setFile(file);
    const pdfFileData = await readXlsxFile(file[0])
      .then((rows) => {
        if (rows) {
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

    if (pdfFileData.length > 0) {
      const header = pdfFileData[0];
      const fileData = pdfFileData.slice(1);

      header.forEach((item, i) => {
        if (item === companyName) companyNameIndex = i;
        if (item === account) accountIndex = i;
        if (item === accountType) accountTypeIndex = i;
        if (item === businessName) businessNameIndex = i;
        if (item === name) nameIndex = i;
        if (item === contact) contactIndex = i;
        if (item === email) emailIndex = i;
      });
      let payload = [];

      fileData.forEach((item, i) => {
        let object = {};
        item.forEach((data, index) => {
          if (companyNameIndex === index)
            object["companyName"] = data.toString();
          if (accountIndex === index)
            object[account.toLowerCase()] = data.toString();
          if (accountTypeIndex === index)
            object["accountType"] = data.toString();
          if (businessNameIndex === index)
            object["businessName"] = data.toString();
          if (nameIndex === index) object[name.toLowerCase()] = data.toString();
          if (contactIndex === index)
            object[contact.toLowerCase()] = data.toString();
          if (emailIndex === index)
            object[email.toLowerCase()] = data.toString();
        });
        payload.push(object);
      });

      await CreateAccountfromFileAPI(payload)
        .then((value) => {
          if (value) {
            Toast(value, "success");
          }
        })
        .catch((err) => {
          if (err) {
            Toast(err, "error");
          }
          console.log(err);
        });
    }
  };

  useEffect(async () => {
    const data = await GetAllAccountAPI();
    if (data.length > 0) {
      setTableData(data);
      setIsWaiting(false);
    }
  }, []);
  return (
    <DashboardLayout title="Accounts Management" topbarAction={topbarAction}>
      <FileUploader
        multiple={true}
        handleChange={handleChange}
        name="file"
        types={fileTypes}
      />
      <p className="mt-4">{file ? `Selected file: ${file[0].name}` : ""}</p>

      {isWaiting === true ? <Spinner /> : <ReactTable tableData={tableData} />}
    </DashboardLayout>
  );
};

export default Accounts;
