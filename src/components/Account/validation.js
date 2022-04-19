import * as yup from "yup";
// IMPORTANT!
// Schema object's property 'key' should match with fields item's 'name'
// property value. Otherwise react hook form can't control the related input

// Schema is for rules to check inputs
// Error messages can get from store or constant by locale
export const schema = yup.object({
  accountNumber: yup.string().required("First Name is required"),
  accountType: yup.string().required("Last Name is required"),
  companyName: yup.string().required("Email is required"),
});

// Fields for the form
// If you add type as "select", you need to add "items" object for the selection
export const fields = [
  {
    id: 1,
    name: "accountNumber",
    type: "text",
    placeholder: "e.g Sara",
    label: "First Name",
  },
  {
    id: 2,
    name: "accountType",
    type: "text",
    placeholder: "e.g Kin",
    label: "Company Website",
  },
  {
    id: 3,
    name: "companyName",
    type: "text",
    placeholder: "e.g kin@gmail.com",
    label: "Email",
  },
];
