import styled from "styled-components";

export const BottomComponentStyled = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  border: 1px solid #e9e9e9;
  border-radius: 8px;
  background: white;
  padding: 15px;
  margin: 5px 15px;
  width: 95%;
  .leftComponent {
    display: flex;
    flex-direction: column;
    width: 47%;
    padding-right: 20px;
    .topSpot {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      .spotlightTitle {
        font-size: 16px;
        line-height: 19px;
        font-weight: 700;
      }
      .region {
        font-size: 10px;
        line-height: 16px;
        font-weight: 700;
        border: 1px solid #e9e9e9;
        border-radius: 8px;
        padding: 10px;
        background: #f7f9fb;
      }
    }
  }
  .itemsWrapper {
    margin-left: 10px;
    display: flex;
    flex-direction: column;
    width: 25%;
    border-left: 1.5px solid #e5e5e5;
    padding-left: 20px;
    .topItems {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      .titleItem {
        font-size: 16px;
        line-height: 19px;
        font-weight: 700;
      }
      .toggle-switch {
        width: 130px;
      }
    }
    .bottomItems {
      display: flex;
      flex-direction: column;
      .items {
        display: flex;
        flex-direction: row;
        background: #f7f9fb;
        border-radius: 8px;
        padding: 10px;
        margin-top: 10px;
        justify-content: space-between;
        align-items: center;
        height: 34px;
        .d-flex {
          display: flex;
          flex-direction: row;
          gap: 5px;
          .id {
            font-weight: 700;
            font-size: 14px;
            line-height: 17px;
          }
          .name {
            font-weight: 400;
            font-size: 14px;
            line-height: 17px;
          }
        }
        .units {
          font-weight: 600;
          font-size: 14px;
          line-height: 17px;
          border: 1px solid #e9e9e9;
          padding: 7px;
          border-radius: 8px;
        }
        .purchase {
          font-weight: 700;
          font-size: 14px;
          line-height: 17px;
        }
      }
    }
  }
`;
