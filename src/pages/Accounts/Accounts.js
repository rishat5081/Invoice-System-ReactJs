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

  const topbarAction = {
    name: "New Supplier",
    onClick: () => {
      showModal({
        title: "Create New Supplier",
        // content: <Forms.CreateNewSupplier />,
        content:
          "When the supplier creation page added, this won't be open. And the link will redirect the creation page.",
      });
    },
  };

  // This will be use to transform data to JSX element
  // when data fetched from api
  const tableData = table.data.map((el) => {
    const newCol = (
      <TableLink onClick={() => showDrawer({ content: <Supplier /> })}>
        {el.col1}
      </TableLink>
    );

    return {
      ...el,
      col1: newCol,
    };
  });

  return (
    <DashboardLayout title="Supplier Management" topbarAction={topbarAction}>
      <S.TableOptions>
        <Search />
        <ReactSelect placeholder="Filter" width="240px" />
      </S.TableOptions>
      <Table payload={{ data: tableData, columns: table.columns }} />
    </DashboardLayout>
  );
};

export default SupplierManagament;
