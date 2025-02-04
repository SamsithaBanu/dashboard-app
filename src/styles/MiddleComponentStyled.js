import styled from "styled-components";

export const MiddleComponentStyled = styled.div`
  .middle-wrapper {
    display: flex;
    flex-direction: row;
    .middleWrapper {
      border: 1px solid #e9e9e9;
      border-radius: 8px;
      background-color: var(--primary-bg);
      color: var(--text-color);  
      padding: 15px;
      width: 33%;
      margin: 5px 15px;
      .topWrapper {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        .progressLeft {
          .title {
            font-size: 16px;
            line-height: 19px;
            font-weight: 700;
            color: var(--text-color);  
          }
          .subTitle {
            font-size: 12px;
            line-height: 15px;
            font-weight: 400;
            color: grey;
            margin-top: 7px;
          }
        }
      }
      .middle {
        display: flex;
        flex-direction: row;
        gap: 7px;
        margin-top: 18px;
        .total {
          font-size: 12px;
          font-weight: 400;
          color: grey;
          writing-mode: vertical-rl;
          transform: rotate(180deg);
          text-align: center;
          font-size: 14px;
          color: gray;
        }
        .chartContainer {
          width: 417px;
          margin: auto;
        }
      }
      .bottomWrap {
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        gap: 10px;
        margin-top: 5px;
        .items {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
          gap: 5px;
          .circle {
            height: 8px;
            width: 8px;
            background: #4f45e4;
            border: 1px solid #4f45e4;
            border-radius: 50%;
          }
          .circle1 {
            height: 8px;
            width: 8px;
            background: #d6d4f5;
            border: 1px solid #d6d4f5;
            border-radius: 50%;
          }
          .titleCir {
            font-size: 10px;
            line-height: 12px;
            font-weight: 600;
            color: #4f45e4;
          }
        }
      }
    }
    .toggle-switch {
      display: flex;
      background-color: #f7f7f7;
      border: 1px solid #e0e0e0;
      border-radius: 30px;
      padding: 2px 4px;
      width: 200px;
      justify-content: space-between;
      align-items: center;
    }

    .toggle-option {
      flex: 1;
      text-align: center;
      padding: 8px 0;
      font-size: 12px;
      font-weight: 700;
      color: #666;
      background-color: transparent;
      border: none;
      border-radius: 30px;
      cursor: pointer;
      transition: all 0.3s ease;
    }

    .toggle-option.active {
      background-color: #5c4efc;
      color: white;
      box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
    }
  }
`;
