import styled from "styled-components";

export const SearchBarGroup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
  }
`;

export const SearchControl = styled.div`
  width: 80%;
  input {
    width: 80%;
  }
`;
