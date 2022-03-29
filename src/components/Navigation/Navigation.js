import { NavigationLink } from "components";
import { navigations } from "constants/components/navigation";
import * as S from "./styles";

const Navigation = ({ padding }) => {
  // console.log(" =-===== navigations  ====", navigations);
  return (
    <S.Navigation padding={padding}>
      {navigations.AdminSideBar.map(({ text, hasSeparator, ...rest }) => (
        <NavigationLink separator={hasSeparator} key={text} {...rest}>
          {text}
        </NavigationLink>
      ))}
    </S.Navigation>
  );
};

export default Navigation;
