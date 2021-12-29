import styled from "styled-components";

export const StyledCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  border-radius: 15px;
  margin: 40px 0;
  padding: 50px;
  flex-direction: ${({ layout }) => layout || "row"};
  img {
    width: 80%;
  }
`;
