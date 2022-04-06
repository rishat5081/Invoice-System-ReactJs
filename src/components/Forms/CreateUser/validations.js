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
  // dueDate: yup
  //   .date()
  //   .typeError("Valid date is required")
  //   .required("Date is required"),
  // invoiceAmount: yup
  //   .number()
  //   .typeError("Amount is required")
  //   .positive("Should be positive!"),
  // paidAmount: yup
  //   .number()
  //   .typeError("Amount is required")
  //   .positive("Should be positive!"),
  // status: yup.string().required("Status is required"),
  // attachment: yup.mixed().required("File is required"),
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
