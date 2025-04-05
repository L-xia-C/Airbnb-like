import styled from "styled-components";

export const FilterWrapper=styled.div`

    .filter{
        display:flex;
        .item{
            margin:0 4px 0 8px;
            padding:6px 12px;
            color:#484848;
            border:1px solid #dce0e0;
            border-radius:4px;
            cursor: pointer;
            &.active{
                background:#008489;
                border:1px solid #008489;
                color:#ffffff;
            }
        }
    }
`