import styled from "styled-components";

export const StyledFooter = styled.footer`
  background-color: ${({ theme }) => theme.colors.footer};
  color: #fff;
  ul {
    list-style-type: none;
  }
`;
