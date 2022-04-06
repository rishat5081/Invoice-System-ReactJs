import * as yup from "yup";

// IMPORTANT!
// Schema object's property 'key' should match with fields item's 'name'
// property value. Otherwise react hook form can't control the related input

// Schema is for rules to check inputs
// Error messages can get from store or constant by locale
export const schema = yup.object({
  firstName: yup.string().required("First Name is required"),
  lastName: yup.string().required("Last Name is required"),
  email: yup.string().required("Email is required"),
  password: yup
    .string()
    .required("Password is required")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
    ),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
    ),
});

// Fields for the form
// If you add type as "select", you need to add "items" object for the selection
export const fields = [
  {
    name: "firstName",
    type: "text",
    placeholder: "e.g John",
    label: "First Name",
  },
  {
    name: "lastName",
    type: "text",
    placeholder: "e.g Doe",
    label: "Last Name",
  },
  {
    name: "email",
    type: "text",
    placeholder: "e.g john@doe.com",
    label: "Email",
  },
  {
    name: "password",
    type: "password",
    placeholder: "e.g 123@ki@nUFu",
    label: "Password",
  },
  {
    name: "confirmPassword",
    type: "password",
    placeholder: "e.g 123@ki@nUFu",
    label: "Confirm Password",
  },
  // {
  //   name: "dueDate",
  //   type: "date",
  //   placeholder: "20/02/2021",
  //   label: "Due Date",
  // },
  // {
  //   name: "invoiceAmount",
  //   type: "number",
  //   placeholder: "$29.99",
  //   label: "Invoice Amount",
  // },
  // {
  //   name: "paidAmount",
  //   type: "number",
  //   placeholder: "$29.99",
  //   label: "Paid Amount",
  // },
  // {
  //   name: "status",
  //   type: "select",
  //   items: [
  //     { value: "paid", label: "Paid" },
  //     { value: "waiting", label: "Waiting" },
  //   ],
  //   label: "Status",
  //   placeholder: "Click to select status",
  // },
  // {
  //   name: "attachment",
  //   type: "file",
  //   placeholder: "example.pdf",
  //   label: "Attachment",
  // },
];
