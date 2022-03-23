import * as yup from "yup";

// IMPORTANT!
// Schema object's property 'key' should match with fields item's 'name'
// property value. Otherwise react hook form can't control the related input

// Schema is for rules to check inputs
// Error messages can get from store or constant by locale
export const schema = yup.object({
  companyName: yup.string().required("Company name can not be empty!"),
  contactName: yup.string().required("Contact name can not be empty!"),
  email: yup.string().email().required("Email address can not be empty!"),
});

// Fields for the form
export const fields = [
  { name: "companyName", placeholder: "TaskFluxe", label: "Company Name" },
  { name: "contactName", placeholder: "John Doe", label: "Contact Name" },
  { name: "email", placeholder: "example@teamfluxe.com", label: "Email Address" },
];
