import styled from "styled-components";

export const ShipmentStyled = styled.div`
.shipmentWrapper{
    border: 1px solid #E5E5E5;
    border-radius: 8px;
    background-color: var(--primary-bg);
    color: var(--text-color);  
    padding: 10px;
    margin: 7px;
    display: flex;
    flex-direction: row;
    gap:15px;
    .leftShipment{
        display: flex;
        flex-direction: column;
        .topComp{
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            gap:25px;
            .titleShip{
                font-weight: 700;
                font-size: 18px;
                line-height: 19px;
                padding-left:10px;
            }
            .filter{
                border: 1px solid #E9E9E9;
                border-radius: 8px;
                padding: 10px ;
                background: #F7F9FB;
                display: flex;
                flex-direction: row;
                gap:10px;
                .filterName{
                    font-weight: 700;
                    font-size: 12px;
                    line-height: 16px;
                    color: black;
                }
            }
        }
        .bottomComp{
            display: flex;
            flex-direction: row;
            gap:7px;
            .shipboxWrapper{
                display: flex;
                flex-direction: column;
                gap: 10px;
                padding:8px;
                .boxWrapper{
                    background: var(--secondary-bg);
                    border-radius: 8px;
                    display: flex;
                    flex-direction: column;
                    padding:10px 0px 12px 15px;
                    margin-top:7px;
                    .topBox{
                        display: flex;
                        flex-direction: row;
                        justify-content: space-between;
                        align-items: center;
                        gap:60px;
                        .leftBox{
                            .shipIdTitle{
                                font-size: 10px;
                                line-height: 12px;
                                color: grey;
                                font-weight: 400;
                                margin-bottom:4px;
                            }
                            .value{
                                font-size: 16px;
                                font-weight: 700;
                                line-height: 19px;
                            }
                        }
                    }
                    .bottomBox{
                        display: flex;
                        flex-direction: row;
                        gap:7px;
                        .addressWrap{
                            display: flex;
                            flex-direction: row;
                            gap:7px;
                            .iconVal{
                                font-size: 10px;
                                line-height: 12px;
                                font-weight; 400;
                            }
                        }
                    }
                }
            }
            .vertical{
                height:210px;
                width:10px;
                border: 1px solid #ECEDEE;
                background: #ECEDEE;
                border-radius:100px;
                margin-top:15px;
                .shortVertical{
                    background:white;
                    height:47px;
                    width: 6px;
                    border-radius: 100px;
                    margin:2px;
                }
            }
        }
    }
    .rightShipment{
        .topRight{
            border-radius: 142px;
            border: 2px solid #E5E5E5;
            padding: 7px 15px;
            background: #F7F9FB;
            font-size:13px;
            line-height:15px;
            color: grey;
            width: 100px;
            span{
                font-weight:700;
            }
        }
        .middleRight{
            width: 449px;
            height:175px;
            margin-top:20px;
        }
        .bottomRight{
            display: flex;
            flex-direction: row;
            gap:15px;
            margin-top: 20px;
            .content{
                .key{
                    font-size:12px;
                    line-height: 14px;
                    color: grey;
                    font-weight:300;
                }
                .value{
                    font-size:14px;
                    line-height: 17px;
                    font-weight: 600;
                    color: var(--text-color);  
                    margin-top:10px;
                }
            }
            .verti{
                border-right:1.5px solid #E5E5E5;
            }
        }
    }
}
`;
