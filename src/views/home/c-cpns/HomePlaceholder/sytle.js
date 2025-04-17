import styled from "styled-components";

export const PlaceWrapper = styled.div`
    margin-top:30px;
    .header{
        height:80px;
        width:110px;
    }
    .allcontent{
        margin: 0 -8px;
        display:flex;
        .item{
            box-sizing:border-box;
            padding:0 8px;
            width:33.33%;
            .picture{
                margin-top:-30px;
                position:relative;
                padding:66.66% 0 0;
                .MuiSkeleton-root{
                    position:absolute;
                    top:0;
                    left: 0;
                    bottom:0;
                }
            }
            .desc{
                margin-top:-40px;
                height:50px;
            }
        }
    }

`