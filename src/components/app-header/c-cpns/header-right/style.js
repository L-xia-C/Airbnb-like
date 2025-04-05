import styled from "styled-components";

export const RightWrapper = styled.div`
flex:1;
display:flex;
justify-content:flex-end;
align-items:center;

color:${props => props.theme.text.primaryColor};
font-weight:600;

position: relative;
.btns{
    box-sizing: content-box;
    display:flex;
    align-items:center;
    .btn{
        height:18px;
        line-height: 18px;
        padding: 12px 15px;
        border-radius: 22px;
        cursor: pointer;
        box-sizing: content-box;
        &:hover{
            background-color: #f5f5f5;
        }
    }
}

.profile{
    display:flex;
    justify-content:space-evenly;
    align-items:center;
    width:77px;
    height:42px;
    border:1px solid #ccc;
    border-radius:525px;
    color: ${props => props.theme.text.primaryColor};
    cursor: pointer;
    ${props => props.theme.mixin.boxshadow};
}

.panel{
    position:absolute;
    width:240px;
    background-color:#fff;
    border-radius:10px;
    top:56px;
    right:0px;
    color: #666;
    box-shadow:rgba(0, 0, 0, 0.12) 0px 2px 16px 0px;
    .top{
        border-bottom:1px solid #ddd;
    }
    .top, .bottom {
        padding: 10px 0;

        .item {
          height: 40px;
          line-height: 40px;
          padding: 0 16px;

          &:hover {
            background-color: #f5f5f5;
          }
        }
      }
}
`