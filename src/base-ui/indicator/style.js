import styled from "styled-components";

export const IndicatorWrapper=styled.div`
    overflow:hidden;
    .i-content{
        display:flex;
        transition: transform 250ms ease;
        >*{
            flex-shrink:0;
        }
    }
`