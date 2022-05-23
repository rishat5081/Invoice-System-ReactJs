import * as yup from "yup";
// IMPORTANT!
// Schema object's property 'key' should match with fields item's 'name'
// property value. Otherwise react hook form can't control the related input

// Schema is for rules to check inputs
// Error messages can get from store or constant by locale
export const schema = yup.object({
  // companyName: yup.string().required("Select Company name!"),
  oldPassword: yup.string().required("Old Password is required"),
  // lastName: yup.string().required("Last Name is required"),
  // email: yup.string().required("Email is required"),
  password: yup
    .string()
    .required("Password is required")
    .min(8, "Password is too short - should be 8 chars minimum.")
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character."
    ),
  confirmpassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match"),
});

// Fields for the form
// If you add type as "select", you need to add "items" object for the selection
export const fields_1 = [
  {
    name: "oldPassword",
    type: "password",
    placeholder: "Enter Old Password",
    label: "Old Password",
  },

  {
    name: "password",
    type: "password",
    placeholder: "Enter Password",
    label: "Password",
  },
  {
    name: "confirmpassword",
    type: "password",
    placeholder: "Confirm Password",
    label: "Confirm Password",
  },
];
