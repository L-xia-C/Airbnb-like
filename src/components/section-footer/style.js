import styled from "styled-components";

export const FootWrapper = styled.div`
    margin-top:10px;
    display:flex; //不设置的话info会默认占据一行
    .info{
        display:flex;
        align-items:center;
        cursor: pointer;

        font-size: 17px;
        font-weight: 700;
        color: ${props => props.$color};

    &:hover {
      text-decoration: underline;
    }

    .text {
      margin-right: 6px;
    }
    }
`