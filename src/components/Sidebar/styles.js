import styled from "styled-components";

import theme, { breakpoints } from "theme";

export const Sidebar = styled.div`
  display: none;

  @media ${breakpoints.md} {
    display: block;

    max-width: 235px;
    min-width: 235px;

    height: 100vh;
    overflow-y:auto;
    padding: 50px 35px 40px 40px;

    background-color: #ffffff;
  }
`;

export const LogoWrapper = styled.div`
  margin-bottom: 70px;
`;
