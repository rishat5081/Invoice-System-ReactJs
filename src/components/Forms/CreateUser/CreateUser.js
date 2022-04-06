import { Fragment, useContext } from "react";
import { Controller } from "react-hook-form";

import { useFormWithYup } from "hooks";
import { Input, SubmitButton, Select } from "components";
import { capitalize } from "utils";
import { schema, fields } from "./validations";
import { ModalContext } from "store/modalContext";

import { CreateUserAPI } from "../../../Axios APIs/Admin APIs/Adminapis";

const CreateNewInvoice = ({ onAddInvoice }) => {
  const { register, handleSubmit, errors, control } = useFormWithYup(schema);
  const { onHide } = useContext(ModalContext);

  const onSubmit = (data) => {
    const { firstName, lastName, email } = data;
    onAddInvoice({
      col1: firstName,
      col2: lastName,
      col3: email,
      // col4: "105",
      // col5: dueDate.toLocaleDateString(),
      // col6: `$${invoiceAmount}`,
      // col7: `$${paidAmount}`,
      // col8: capitalize(status),
      // col9: attachment[0]?.name || "No file uploaded",
      // col10: "See notes",
    });
    onHide();
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
