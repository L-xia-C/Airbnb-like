import styled from "styled-components";

export const CenterWrapper=styled.div`
.search-bar{
    display:flex;
    align-items: center;
    justify-content:space-between;
    width: 300px;
    height: 48px;
    padding: 0 8px;
    box-sizing: border-box;
    border:1px solid #ddd;
    border-radius: 24px;
    cursor: pointer;
    ${props => props.theme.mixin.boxshadow};

    .text{
        padding:0 16px;
        color: #222;
        font-weight: 600;
    }
    .icon{
        display:flex;
        align-items:center;
        justify-content:center;
        border-radius: 50%;
        color: #fff;
        width:32px;
        height:32px;
        background-color:${props=>props.theme.color.primaryColor}
    }
}
`