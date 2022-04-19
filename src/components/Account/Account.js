import { useEffect, useState, Fragment, useContext } from "react";
import { useHistory } from "react-router-dom";
import { useFormWithYup } from "hooks";
import { details, table } from "constants/components/user";
import {
  OverviewTable,
  Icon,
  SubmitButton,
  Input,
  Spinner,
  Toast,
} from "components";
import * as S from "./styles";
import { UpdateAccountByIdAPI } from "../../Axios APIs/Accounts/accounts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { schema } from "./validation";
import {
  faCircleMinus,
  faTrash,
  faPenToSquare,
} from "@fortawesome/free-solid-svg-icons";
import { DrawerContext } from "store/drawerContext";
/**
 * This component will be only use in Drawer as a content
 * @param {string} supplierId Id to fetch supplier data
 */
const User = ({
  accountId,
  onUpdate,
  accountNumber,
  accountType,
  companyName,
}) => {
  const history = useHistory();
  const { register, handleSubmit, errors, control } = useFormWithYup(schema);
  const [fields, setFields] = useState([]);
  const [email, setEmail] = useState(null);
  const [isWaiting, setIsWaiting] = useState(false);
  const { onHide } = useContext(DrawerContext);

  useEffect(async () => {
    const arr = [];
    arr.push({
      id: accountId,
      name: "accountNumber",
      value: accountNumber,
      type: "text",
      placeholder: "e.g UK0s87*****",
      label: "Account Number",
    });
    arr.push({
      id: accountId,
      name: "accountType",
      value: accountType,
      type: "text",
      placeholder: "e.g Saving, Current",
      label: "Account Type",
    });
    arr.push({
      id: accountId,
      name: "companyName",
      value: companyName,
      type: "text",
      placeholder: "e.g Uk WholeSale",
      label: "Company Name",
    });
    setFields(arr);
    setIsWaiting(false);
  }, []);

  // updating the user
  const onSubmit = async (data) => {
    setIsWaiting(true);
    const { companyName, accountType, accountNumber } = data;
    const updateResponse = await UpdateAccountByIdAPI(
      accountId,
      accountNumber,
      accountType,
      companyName
    )
      .then((value) => {
        if (value) {
          Toast("Update Successfully", "success");
          onUpdate({ accountId, accountNumber, accountType, companyName });
          onHide();
          setIsWaiting(false);
        }
      })
      .catch((err) => {
        if (err) Toast("Error updating User", "error");
        console.log(err);
      });
  };

  //deleting the user
  // const deleteUser = async () => {
  //   setIsWaiting(true);
  //   const response = await DeleteUserByIdAPI(userId)
  //     .then((value) => {
  //       if (value) {
  //         Toast("Deleted Successfully", "success");
  //         onDelete(email);
  //         onHide();
  //       }
  //     })
  //     .catch((err) => {
  //       if (err) Toast("Error deleting User", "error");
  //       console.log(err);
  //     });
  //
  //   setIsWaiting(false);
  // };

  return (
    <S.Supplier>
      {isWaiting === true ? (
        <Spinner />
      ) : (
        <>
          <div className="p-2 mb-5 ">
            <form onSubmit={handleSubmit(onSubmit)}>
              {fields.map(({ name, label, type, ...rest }) => (
                <Fragment key={name}>
                  {type === "select" ? (
                    <Controller
                      control={control}
                      name={name}
                      render={({
                        field: { onChange, value },
                        fieldState: { error },
                      }) => (
                        <Select
                          value={value}
                          label={label}
                          onChange={onChange}
                          error={error}
                          {...rest}
                        />
                      )}
                    />
                  ) : (
                    <Input
                      key={name}
                      label={label}
                      error={errors[name]?.message}
                      type={type}
                      {...register(name)}
                      {...rest}
                    />
                  )}
                </Fragment>
              ))}
              <SubmitButton>Update</SubmitButton>
            </form>
          </div>
        </>
      )}
    </S.Supplier>
  );
};

export default User;
