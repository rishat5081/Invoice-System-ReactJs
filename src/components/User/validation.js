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

  // contactNumber: yup
  //   .number()
  //   .typeError("Contact Number is required")
  //   .positive("Should be positive!"),
  // mobileNumber: yup
  //   .number()
  //   .typeError("Contact Number is required")
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
    id: 1,
    name: "companyPhone",
    type: "number",
    placeholder: "1021-82115-2",
    label: "Phone Number",
  },
  {
    id: 2,
    name: "companyWeb",
    type: "text",
    placeholder: "e.g www.kitkat.com",
    label: "Company Website",
  },
  {
    id: 3,
    name: "companyAddress",
    type: "text",
    placeholder: "e.g 140-West USA",
    label: "Company Address",
  },
];
