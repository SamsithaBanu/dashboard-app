import styled from "styled-components";

export const SidebarStyled = styled.div`
  padding: 10px 15px;
  width: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #F7F9FB;
  .sidebarWrapper {
    position: fixed;
    .logo {
      width: 40px;
      height: 40px;
      padding: 10px 0px;
    }
    .iconsWrapper {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      gap: 190px;
      cursor: pointer;

      .top {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 6px;
        .boxIcon{
          width:30px;
          height:30px;
          border-radius:8px;
          padding:3px;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
        }
        .iconWrapper {
          width: 38px;
          height: 38px;
          margin-top: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 8px;
        }
      }
      .bottom {
        display: flex;
        flex-direction: column;
        .question{
          width:22px;
          height:22px;
          border-radius:50%;
          padding:3px;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
        }
        .horizontal {
          width: 35px;
          margin-left: 0px;
          color: grey;
        }
      }
    }
  }
`;
