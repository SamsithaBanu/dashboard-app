import styled from "styled-components";

export const AppStyled = styled.div`
  .appWrapper {
    display: flex;
    flex-direction: row;
    font-family: "Proxima Nova", Arial, sans-serif; /* Fallback fonts */
    .rightWrapper {
      display: flex;
      flex-direction: column;
      width: 100%;
      background: #F7F9FB;
    }
  }
`;
