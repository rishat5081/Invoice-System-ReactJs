import { paths } from "routes/paths";

export const AdminSideBar = [
  {
    to: "/user-invoice",
    text: "Upload Invoices",
    icon: "money",
    disabled: false,
  },
  {
    to: paths.userManagement,
    text: "Users",
    icon: "dashboard",
    disabled: false,
  },
  {
    to: "not-found",
    text: "Admins",
    icon: "admin",
    disabled: false,
  },
  {
    to: paths.accounts,
    text: "Accounts",
    icon: "account",
    disabled: false,
  },
  {
    to: paths.allInvoicesFiles,
    text: "All Invoices",
    icon: "logs",
    disabled: false,
  },
  {
    to: paths.loginLogs,
    text: "Login Logs",
    icon: "logs",
    disabled: false,
  },
  {
    to: paths.invoiceLogs,
    text: "Invoice Logs",
    icon: "logs",
    disabled: false,
  },
];
