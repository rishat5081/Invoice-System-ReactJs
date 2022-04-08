import { useEffect, useState, Fragment } from "react";
import { useFormWithYup } from "hooks";
import { details, table } from "constants/components/user";
import { OverviewTable, Icon, SubmitButton, Input, Spinner } from "components";
import * as S from "./styles";
import { GetUserByIdAPI } from "../../Axios APIs/Admin APIs/Adminapis";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { schema } from "./validation";
import {
  faCircleMinus,
  faTrash,
  faPenToSquare,
} from "@fortawesome/free-solid-svg-icons";
/**
 * This component will be only use in Drawer as a content
 * @param {string} supplierId Id to fetch supplier data
 */
const User = ({ userId }) => {
  const { register, errors, control } = useFormWithYup(schema);
  const [fields, setFields] = useState([]);
  const [isWaiting, setIsWaiting] = useState(true);
  useEffect(async () => {
    // This will be use to fetch
    // supplier information from endpoints
    // with {supplierId}

    const details = await GetUserByIdAPI(userId);
    const arr = [];
    arr.push({
      id: details.id,
      name: details.firstName,
      value: details.firstName,
      type: "text",
      placeholder: "e.g John",
      label: "First Name",
    });
    arr.push({
      id: details.id,
      name: details.lastName,
      value: details.lastName,
      type: "text",
      placeholder: "e.g Smith",
      label: "Last Name",
    });
    arr.push({
      id: details.id,
      name: details.email,
      value: details.email,
      type: "text",
      placeholder: "e.g smith@gmail.com",
      label: "Email",
    });
    setFields(arr);
    setIsWaiting(false);
  }, []);

  const handleSubmit = (data) => {
    console.log(data);
  };

  return (
    <S.Supplier>
      {isWaiting === true ? (
        <Spinner />
      ) : (
        <>
          <div class="d-flex justify-content-end">
            <div className="p-2 text-danger">
              <FontAwesomeIcon icon={faTrash} />
            </div>
          </div>
          <div className="p-2 mb-5 ">
            <form onSubmit={() => handleSubmit()}>
              {fields.length < 0 ? (
                <Spinner />
              ) : (
                fields.map(
                  ({ id, name, label, value, type, ...rest }, index) => (
                    <Fragment key={index}>
                      <Input
                        style={{
                          width: "50%",
                          color: "#2C7BE5",
                          fontWeight: 500,
                        }}
                        key={id}
                        value={value === null ? "" : value}
                        label={label}
                        error={errors[name]?.message}
                        type={type}
                        {...register(name)}
                        {...rest}
                      />
                    </Fragment>
                  )
                )
              )}

              <SubmitButton>Update</SubmitButton>
            </form>
          </div>
        </>
      )}
    </S.Supplier>
  );
};

export default User;
