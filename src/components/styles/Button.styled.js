import styled from "styled-components";

export const Button = styled.button`
  border-radius: 50px;
  border: none;
  cursor: pointer;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  font-size: 16px;
  padding: 15px 16px;
  background-color: ${({ bg }) => bg || "#fff"};
  color: ${({ color }) => color || "#333"};

  &:hover {
    opacity: 0.9;
    transform: scale(0.98);
  }
`;
