import { Fragment, useContext } from "react";
import { Controller } from "react-hook-form";

import { useFormWithYup } from "hooks";
import { Input, SubmitButton, Select } from "components";
import { capitalize } from "utils";
import { schema, fields } from "./validations";
import { ModalContext } from "store/modalContext";
import { CreateNewAccountAPI } from "../../../Axios APIs/Accounts/accounts";
const CreateNewAccount = () => {
  const { register, handleSubmit, errors, control } = useFormWithYup(schema);
  const { onHide } = useContext(ModalContext);

  const onSubmit = (data) => {
    const { accountNumber, companyName, accountType } = data;
    let payload = [{ accountNumber, companyName, accountType }];
    CreateNewAccountAPI(payload)
      .then((value) => {
        console.log(value);
      })
      .catch((err) => {
        console.log(err);
      });
    console.log("data", data);
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

export default CreateNewAccount;
