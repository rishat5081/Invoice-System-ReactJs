// import { signUpAPI } from "APIs/Web Controls/webControls";
import { Input, NavigationBar, Select, SubmitButton } from "components";
import { DashboardLayout } from "layouts";
import { useFormWithYup } from "hooks";
import { Fragment } from "react";
import { Controller } from "react-hook-form";
import { schema, fields_1 } from "./validations";
const SignUp = (props) => {
  const { register, handleSubmit, errors, control } = useFormWithYup(schema);

  const onSubmit = async (data) => {
    console.log("Login ::: ", data);

    // await signUpAPI(
    //   data.confirmpassword,
    //   data.email,
    //   data.firstname,
    //   data.lastName,
    //   data.password
    // )
    //   .then((result) => {
    //     if (result.status === "Created") callSuccessToast(result.message);
    //     if (result.status === "Error") callErrorToast(result.message);
    //   })
    //   .catch((err) => {
    //     if (err.status === "Error") callErrorToast(err.message);
    //   });
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
export default SignUp;
