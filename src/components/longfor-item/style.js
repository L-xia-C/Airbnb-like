import styled from "styled-components";

export const ItemWrapper = styled.div` 
    flex-shrink:0;
    width:20%;
    .inner{
        padding:8px;
        .item-info{
            position:relative;
            border-radius:3px;
            overflow:hidden;
            .cover{
                width:100%;
            }
            .bg-cover{
                position:absolute;
                height:60%;
                left:0;
                bottom:0;
                right:0;
                background-image: linear-gradient(-180deg, rgba(0, 0, 0, 0) 3%, rgb(0, 0, 0) 100%)
            }
            .info{
                position:absolute;
                bottom:0;
                left:8px;
                right:8px;
                display:flex;
                flex-direction:column;
                align-items:center;
                justify-content:center;
                color: #fff;
                padding: 0 24px 32px;
                .city {
                    font-size: 18px;
                    font-weight: 600;
                }
                .price {
                font-size: 14px;
                margin-top: 5px;
                }
            }
        }
    }
`