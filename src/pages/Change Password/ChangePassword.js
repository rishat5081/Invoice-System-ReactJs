// import { signUpAPI } from "APIs/Web Controls/webControls";
import { Input, NavigationBar, Select, SubmitButton, Toast } from "components";
import { DashboardLayout } from "layouts";
import { useFormWithYup } from "hooks";
import { Fragment } from "react";
import { Controller } from "react-hook-form";
import { schema, fields_1 } from "./validations";
import { ChangePasswordAPI } from "../../Axios APIs/User APIs/Userapis";
const ChangePassword = (props) => {
  const { register, handleSubmit, errors, control } = useFormWithYup(schema);

  const onSubmit = async (data) => {
    console.log("Login ::: ", data);

    await ChangePasswordAPI(data.oldPassword, data.confirmpassword)
      .then((result) => {
        console.log("------------", result);
        if (result) Toast(result.message, "sucess");
      })
      .catch((err) => {
        if (err) Toast(result.message, "error");
      });
  };
  return (
    <>
      <DashboardLayout title="Change Password">
        <div className="outer">
          <div className="inner">
            <form onSubmit={handleSubmit(onSubmit)}>
              {fields_1.map(({ name, label, value, type, ...rest }) => (
                <Fragment key={label}>
                  {type === "select" ? (
                    <Controller
                      control={control}
                      name={name}
                      value={value}
                      render={({
                        field: { onChange, value },
                        fieldState: { error },
                      }) => (
                        <Select
                          value={value}
                          label={label}
                          onChange={onChange}
                          // selectedValue={selectedCompany}
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
              <div className="text-center">
                <SubmitButton>Confirm</SubmitButton>
              </div>
            </form>
          </div>
        </div>
      </DashboardLayout>
    </>
  );
};
export default ChangePassword;
