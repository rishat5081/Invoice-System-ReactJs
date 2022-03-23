import { forwardRef } from "react";

import { Select } from "components";
import * as S from "./styles";

const Input = forwardRef(({ name, type, label, placeholder, error, ...rest }, ref) => {
  return (
    <S.InputWrapper>
      {label && <S.Label htmlFor={name}>{label}</S.Label>}
      <S.Input
        error={error}
        ref={ref}
        name={name}
        placeholder={placeholder}
        type={type}
        {...rest}
      />
      {error && <S.ErrorMessage>{error}</S.ErrorMessage>}
    </S.InputWrapper>
  );
});

export default Input;
