import * as yup from "yup";

// IMPORTANT!
// Schema object's property 'key' should match with fields item's 'name'
// property value. Otherwise react hook form can't control the related input

// Schema is for rules to check inputs
// Error messages can get from store or constant by locale
export const schema = yup.object({
  accountNumber: yup.string().required("Account Number is required"),
  companyName: yup.string().required("Company Name is required"),
  accountType: yup.string().required("Account Type is required!"),
});

// Fields for the form
// If you add type as "select", you need to add "items" object for the selection
export const fields = [
  {
    name: "accountNumber",
    type: "text",
    placeholder: "e.g UK7841321",
    label: "Account Number",
  },
  {
    name: "companyName",
    type: "text",
    placeholder: "e.g UK Wholesale",
    label: "Company Name",
  },
  {
    name: "accountType",
    type: "text",
    placeholder: "e.g Current",
    label: "Account Type",
  },
];
