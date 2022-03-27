import { Icon } from "components";
import * as S from "./styles";
import { useHistory } from "react-router-dom";

const Userbar = () => {
  const history = useHistory();
  const logout = () => {
    localStorage.removeItem("userDetails");
    localStorage.removeItem("token");
    history.push("/");
  };
  return (
    <S.Userbar>
      <S.UserField>
        <Icon name="search" width={26} height={26} />
        <Icon name="notifications" width={26} height={26} />
      </S.UserField>
      <S.UserProfile>
        <S.UserDetail>
          <S.Username>John Doe</S.Username>
          <S.Role>Stock Manager</S.Role>
        </S.UserDetail>
        <S.UserPic src="/assets/images/user-pic.png" alt="User Picture" />
        <S.UserFieldLogout
          onClick={() => {
            logout();
          }}
        >
          <div>
            <Icon name="launch" width={26} height={26} />
          </div>
        </S.UserFieldLogout>
      </S.UserProfile>
    </S.Userbar>
  );
};

export default Userbar;
