import styled from "styled-components";

export const ToggleStyled = styled.div`
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
    // background-color: #5c4efc;
    background-color: ${(props) => (props?.themeColor ? props?.themeColor : "#4f45e4")};
    color: white;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  }
`;
