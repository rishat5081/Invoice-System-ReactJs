import { Fragment, useContext } from "react";
import { Controller } from "react-hook-form";

import { useFormWithYup } from "hooks";
import { Input, SubmitButton, Select, Toast } from "components";
import { capitalize } from "utils";
import { schema, fields } from "./validations";
import { ModalContext } from "store/modalContext";

import { CreateUserAPI } from "../../../Axios APIs/Admin APIs/Adminapis";

const CreateNewInvoice = ({ onAddInvoice }) => {
  const { register, handleSubmit, errors, control } = useFormWithYup(schema);
  const { onHide } = useContext(ModalContext);

  const onSubmit = async (data) => {
    const { firstName, lastName, email, password, confirmPassword } = data;
    const userAdded = await CreateUserAPI(
      firstName,
      lastName,
      email,
      password,
      confirmPassword
    )
      .then((value) => {
        if (value) {
          console.log("value ----", value);
          Toast("User is Created Successfully", "success");
          onAddInvoice({
            id: value.Data.id,
            firstName: firstName,
            lastName: lastName,
            email: email,
            // col4: "105",
            // col5: dueDate.toLocaleDateString(),
            // col6: `$${invoiceAmount}`,
            // col7: `$${paidAmount}`,
            // col8: capitalize(status),
            // col9: attachment[0]?.name || "No file uploaded",
            // col10: "See notes",
          });
          onHide();
        } else return false;
      })
      .catch((err) => {
        if (err) return false;
        console.log(err);
        Toast("Error Creating User", "error");
      });
  };

  return (
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
      <SubmitButton>Create</SubmitButton>
    </form>
  );
};

export default CreateNewInvoice;
