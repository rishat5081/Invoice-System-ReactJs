import { useContext } from "react";

import { DashboardLayout } from "layouts";
import {
  Table,
  Search,
  ReactSelect,
  Supplier,
  TableLink,
  Forms,
} from "components";
import { ModalContext } from "store/modalContext";
import { DrawerContext } from "store/drawerContext";
import { table } from "constants/pages/supplierManagement";
import * as S from "./styles";

const SupplierManagament = () => {
  const { onShow: showDrawer } = useContext(DrawerContext);
  const { onShow: showModal } = useContext(ModalContext);

  const addInvoice = async () => {
    console.log("addInvoice");
  };
  const topbarAction = {
    name: "Create an Account",
    onClick: () => {
      showModal({
        content: <Forms.CreateNewInvoice onAddInvoice={addInvoice} />,
        title: "Create New Account",
      });
    },
  };

  return (
    <DashboardLayout
      title="Accounts Management"
      topbarAction={topbarAction}
    ></DashboardLayout>
  );
};

export default SupplierManagament;
