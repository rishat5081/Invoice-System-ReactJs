import { NavigationLink } from "components";
// import { navigations } from "constants/components/navigation";
import * as S from "./styles";

import * as AdminSideBar from "./RoleBaseSideBar/adminRoles";
import * as UserSideBar from "./RoleBaseSideBar/user";

//getting the role from the localStorage
const userRole = localStorage.getItem("user");

console.log("userRole ----", userRole);

const Navigation = ({ padding, role }) => {
  let navigations;
  navigations =
    role === "user" ? UserSideBar.UserSideBar : AdminSideBar.AdminSideBar;

  return (
    <S.Navigation padding={padding}>
      {navigations.map(({ text, hasSeparator, ...rest }) => (
        <NavigationLink separator={hasSeparator} key={text} {...rest}>
          {text}
        </NavigationLink>
      ))}
    </S.Navigation>
  );
};

export default Navigation;
