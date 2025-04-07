import styled from "styled-components";

export const EntireWrapper = styled.div`
    .changeButton{
        position:fixed;
        right:28px;
        width: 48px;              /* 设置宽度 */
        height: 48px;             /* 设置高度 */
        text-align: center;
        line-height: 48px;  /* 和高度一样 */
        border-radius: 50%;       /* 圆形 */
        /* border:1px solid #dce0e0; */
        color:white;
        background-color:${props => props.theme.color.primaryColor};;
        font-weight:600;
        z-index:9
    }
`