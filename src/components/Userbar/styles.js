import styled from "styled-components";

import theme from "theme";

export const Userbar = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  width: 350px;
  height: 100%;
  border-radius: 0 0 20px 20px;
  padding: 25px 22px;
  background-color: #fff;
`;

export const UserField = styled.div`
  display: flex;
  color: #a6a6a6;
  padding-right: 25px;
  border-right: 2px solid #f2f2f2;
  svg + svg {
    margin-left: 25px;
  }
`;

export const UserFieldLogout = styled.div`
  display: flex;
  color: #a6a6a6;
  padding-left: 25px;
  border-left: 1px solid #f2f2f2;
  color: red;
  cursor: pointer;
`;

export const UserProfile = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const UserDetail = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: right;
  margin-right: 10px;
`;

export const Username = styled.span`
  font-size: ${theme.font.md.size};
  font-weight: 500;
  color: ${theme.main.colors.primary};
  margin-bottom: 2px;
`;

export const Role = styled.span`
  font-size: 13px;
  color: #6b6b6b;
`;

export const UserPic = styled.img`
  width: 35px;
  height: 35px;
  border-radius: 50%;
`;
