import * as P from "pages";
import { paths } from "./paths";

export const routes = [
  { path: paths.adminlogin, exact: true, component: P.LoginAdmin },
  { path: paths.login, exact: true, component: P.Login },
  {
    path: paths.userManagement,
    exact: true,
    component: P.UserManagement,
  },
  {
    path: paths.userInvoices,
    exact: true,
    component: P.UserInvoices,
  },
  {
    path: paths.accounts,
    exact: true,
    component: P.Accounts,
  },
  {
    path: paths.invoiceManagement,
    exact: true,
    component: P.InvoiceManagement,
  },
  {
    path: paths.allInvoicesFiles,
    exact: true,
    component: P.All_InvoiceFiles,
  },
  {
    path: paths.invoiceLogs,
    exact: true,
    component: P.InvoiceLogs,
  },
  {
    path: paths.loginLogs,
    exact: true,
    component: P.LoginLogs,
  },
  {
    path: paths.changePassword,
    exact: true,
    component: P.ChangePassword,
  },
];
