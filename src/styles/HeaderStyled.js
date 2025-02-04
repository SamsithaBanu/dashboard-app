import styled from "styled-components";

export const HeaderStyled = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background: #4f45e4;
  padding: 15px 20px;
  // width:93%;
  // position: fixed;
  .leftWrapper {
    display: flex;
    flex-direction: row;
    gap: 20px;
    align-items: center;
    .searchWrapper {
      display: flex;
      flex-direction: row;
      background: #3830b7;
      width: 362px;
      height: 35px;
      align-items: center;
      border-radius: 10px;
      padding: 0px 8px;
      gap: 5px;

      .search-input {
        border: none;
        outline: none;
        background: none;
        color: white;
        font-size: 16px;
        width: 100%;
      }

      .search-input::placeholder {
        color: #fff;
      }
    }
  }
  .rightsideWrapper {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
    .iconWrapper {
      display: flex;
      flex-direction: row;
      gap: 15px;
    }
    .userWrapper {
      display: flex;
      flex-direction: row;
      background: #3830b7;
      border-radius: 8px;
      padding: 8px;
      .detailWrapper {
        color: white;
        .email {
          font-size: 11px;
          line-height: 14px;
          font-weight: 400;
        }
        .company {
          font-size: 11px;
          line-height: 14px;
          font-weight: 700;
          margin-top: 3px;
        }
      }
    }
  }
`;
