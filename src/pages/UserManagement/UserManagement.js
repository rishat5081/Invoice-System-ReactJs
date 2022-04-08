import { useState, useEffect, useContext, useCallback } from "react";

import { DashboardLayout } from "layouts";
import { Table, TableLink, Forms, Spinner, User } from "components";

import { ModalContext } from "store/modalContext";
import { DrawerContext } from "store/drawerContext";

import { GetAllUsersAPI } from "../../Axios APIs/Admin APIs/Adminapis";
import { table } from "constants/pages/userManagement";
import * as S from "./styles";

const UserManagement = () => {
  // This state will be fetch from API, for now it's constant from file.
  const [tableData, setTableData] = useState(table.data);
  const [transformedTableData, setTransformedTableData] = useState([]);
  const [isTableTransformed, setIsTableTransformed] = useState(false);
  const [isWaiting, setIsWaiting] = useState(true);
  const { onShow: showModal } = useContext(ModalContext);
  const { onShow: showDrawer } = useContext(DrawerContext);

  //add a new user to the table
  const addNewUser = (newUser) => {
    setTableData((prev) => [...prev, newUser]);
    setIsTableTransformed(false);
  };

  useEffect(async () => {
    const getUsers = await GetAllUsersAPI();
    if (getUsers.length > 0) {
      const newTableData = getUsers.map((el) => {
        const newCol = (
          <TableLink
            onClick={() => showDrawer({ content: <User userId={el.id} /> })}
          >
            {el.firstName}
          </TableLink>
        );

        return {
          firstName: newCol,
          lastName: el.lastName,
          email: el.email,
        };
      });
      setTransformedTableData(newTableData);
      setIsWaiting(false);
    }
  }, []);
  useEffect(() => {
    if (!isTableTransformed) {
      // transformTableData();
      setIsTableTransformed(true);
    }
  }, [isTableTransformed]);

  const topbarAction = {
    name: "New User",
    onClick: () => {
      showModal({
        content: <Forms.CreateUser onAddInvoice={addNewUser} />,
        title: "Create User",
      });
    },
  };

  return (
    <DashboardLayout title="User Management" topbarAction={topbarAction}>
      {isWaiting === true ? (
        <Spinner />
      ) : (
        <Table
          payload={{ data: transformedTableData, columns: table.columns }}
        />
      )}
    </DashboardLayout>
  );
};

export default UserManagement;
