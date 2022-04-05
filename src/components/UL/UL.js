import * as S from "./styles";

const UL = ({ ...props }) => {
  return <S.UL class="list-group list-group-flush" {...props} />;
};

export default UL;

// <S.List >{...props} <S.List />;
