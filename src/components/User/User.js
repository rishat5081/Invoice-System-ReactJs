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
import {
  GetUserByIdAPI,
  DeleteUserByIdAPI,
  UpdateUserByIdAPI,
} from "../../Axios APIs/Admin APIs/Adminapis";
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
const User = ({ userId, onDelete }) => {
  const history = useHistory();
  const { register, handleSubmit, errors, control } = useFormWithYup(schema);
  const [fields, setFields] = useState([]);
  const [email, setEmail] = useState(null);
  const [isWaiting, setIsWaiting] = useState(true);
  const { onHide } = useContext(DrawerContext);

  useEffect(async () => {
    // This will be use to fetch
    // supplier information from endpoints
    // with {supplierId}

    const details = await GetUserByIdAPI(userId);
    const arr = [];
    setEmail(details.email);
    arr.push({
      id: details.id,
      name: "firstName",
      value: details.firstName,
      type: "text",
      placeholder: "e.g John",
      label: "First Name",
    });
    arr.push({
      id: details.id,
      name: "lastName",
      value: details.lastName,
      type: "text",
      placeholder: "e.g Smith",
      label: "Last Name",
    });
    arr.push({
      id: details.id,
      name: "email",
      value: details.email,
      type: "text",
      placeholder: "e.g smith@gmail.com",
      label: "Email",
    });
    setFields(arr);
    setIsWaiting(false);
  }, []);

  // updating the user
  const onSubmit = async (data) => {
    setIsWaiting(true);
    const { firstName, lastName, email } = data;

    const updateResponse = await UpdateUserByIdAPI(
      userId,
      firstName,
      lastName,
      email
    )
      .then((value) => {
        if (value) {
          Toast("Update Successfully", "success");
          setIsWaiting(false);
        }
      })
      .catch((err) => {
        if (err) Toast("Error updating User", "error");
      });
  };

  //deleting the user
  const deleteUser = async () => {
    setIsWaiting(true);
    const response = await DeleteUserByIdAPI(userId)
      .then((value) => {
        if (value) {
          Toast("Deleted Successfully", "success");
          onDelete(email);
          onHide();
        }
      })
      .catch((err) => {
        if (err) Toast("Error deleting User", "error");
        console.log(err);
      });

    setIsWaiting(false);
  };

  return (
    <S.Supplier>
      {isWaiting === true ? (
        <Spinner />
      ) : (
        <>
          <div className="d-flex justify-content-end">
            <div className="p-2 text-danger" onClick={() => deleteUser()}>
              <FontAwesomeIcon icon={faTrash} />
            </div>
          </div>
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
