import styled from "styled-components";

export const HeaderBelowStyled = styled.div`
  padding: 15px 20px;
  border-bottom: 1px solid #e5e5e5;
  .headerBelowWrapper {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    .leftHeader {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 10px;
      .iconicWrapper {
        width: 48px;
        height: 48px;
        border-radius: 4px;
        background: #fff;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
      }
      .nameWrapper {
        .name {
          font-weight: 600;
          font-size: 22px;
        }
        .company {
          font-size: 14px;
          font-weight: 400;
          color: grey;
          margin-top: 2px;
        }
      }
      .customTag {
        border-radius: 6px;
        font-size: 11px;
        font-weight: 600;
        line-height: 13px;
        color: white;
        background: ${(props) =>
          props?.themeColor ? props?.themeColor : "#4f45e4"};
        padding: 8px 10px;
        margin-left: 15px;
        margin-top: -12px;
      }
    }
    .dropdownWrapper {
      display: flex;
      flex-direction: row;
      gap: 15px;
      .dropdown-container {
        position: relative;
        width: 150px;
      }

      .dropdown-header {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: white;
        border: 1px solid #e5e5e5;
        border-radius: 12px;
        padding: 4px 15px;
        cursor: pointer;
        font-size: 12px;
        font-weight: 600;
        color: grey;
        gap: 5px;
      }

      .dropdown-header .arrow {
        font-size: 16px;
        // color: #999;
        margin-top: 5px;
      }

      .dropdown-list {
        position: absolute;
        top: 100%;
        left: 0;
        width: 100%;
        background-color: white;
        border: 1px solid #e5e5e5;
        border-radius: 8px;
        margin-top: 5px;
        box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
        z-index: 10;
        list-style: none;
        padding: 0;
        margin: 0;
      }

      .dropdown-item {
        padding: 10px 15px;
        cursor: pointer;
        font-size: 12px;
        color: grey;
      }

      .dropdown-item:hover {
        background-color: #f4f4f4;
      }
    }
  }
`;
