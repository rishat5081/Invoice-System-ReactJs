import { paths } from "routes/paths";
import * as AdminSideBar from "./RoleBaseSideBar/adminRoles";
import * as UserSideBar from "./RoleBaseSideBar/user";

//getting the role from the localStorage
const userRole = localStorage.getItem("user");
export let navigations;
navigations =
  userRole === "user" ? UserSideBar.UserSideBar : AdminSideBar.AdminSideBar;
