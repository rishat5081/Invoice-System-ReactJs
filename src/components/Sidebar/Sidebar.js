import { Navigation, Logo } from "components";

import * as S from "./styles";

const Sidebar = () => {
  return (
    <S.Sidebar>
      <S.LogoWrapper>
        <Logo />
      </S.LogoWrapper>
      <Navigation padding="0" role={localStorage.getItem("user")} />
    </S.Sidebar>
  );
};

export default Sidebar;
