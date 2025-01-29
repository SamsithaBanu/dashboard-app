import styled from "styled-components";

export const PurchaseStyled = styled.div`
  .purchaseWrapper {
    display: flex;
    flex-direction: row;
    gap: 15px;
    padding: 20px 15px 10px 15px;
    font-family: "Proxima Nova", Arial, sans-serif; /* Fallback fonts */
    .wrapper {
      border: 1px solid #e5e5e5;
      background: #fff;
      border-radius: 8px;
      padding: 13px;
      width: 290px;
      display: flex;
      flex-direction: column;
      gap: 10px;
      .topContent {
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        justify-content: space-between;
        .leftContent {
          display: flex;
          flex-direction: column;
          gap: 7px;
          .title {
            font-size: 14px;
            font-weight: 400px;
            color: grey;
          }
          .amount {
            color: #4f45e4;
            font-weight: 700;
            font-size: 22px;
            span {
            }
          }
        }
      }
      .bottomContent {
        font-size: 12px;
        font-weight: 550;
        color: grey;
      }
    }
  }
`;
