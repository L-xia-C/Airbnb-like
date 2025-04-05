import styled from "styled-components";

export const ItemWrapper = styled.div`
    flex-shrink:0;
    width:${props => props.$itemWidth};
    box-sizing:border-box;
    padding:8px;
    .inner {
    width: 100%;
    .swiper{
        position:relative;
        &:hover{
          .control{
            display: flex;
          }
        }
        .control{
        position: absolute;
        z-index: 1;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        display: none;
        justify-content: space-between;
        color: #fff;
        }
        .btn {
        display: flex;
        width:83px;
        height:100%;
        justify-content:center;
        align-items:center;
        background: linear-gradient(to left, transparent 0%, rgba(0, 0, 0, 0.25) 100%);
        &.right {
          background: linear-gradient(to right, transparent 0%, rgba(0, 0, 0, 0.25) 100%);
        }
        }
        .indcatior{
          position:absolute;
          bottom: 10px;
          left:0;
          right:0;
          width:30%;
          margin:0 auto;
          .item{
            display:flex;
            justify-content: center;
            align-items: center;
            width: 14.29%;
            .dot{
              width:6px;
              height:6px;
              background-color:#fff;
              border-radius:3px;
              &.active{
                width:8px;
                height:8px;
              }
            }
          }
        }
    }
  }
    .cover{
        position:relative;
        box-sizing:border-box;
        padding:66.66% 0 0;
        img{
            position:absolute;
            top:0;
            left:0;
            width:100%;
            height:100%;
            object-fit:cover;
        }
    }
    .desc {
    margin: 10px 0 5px;
    font-size: 12px;
    font-weight: 700;
    color: ${props => props.$verifyColor};
  }

  .name {
    font-size: 16px;
    font-weight: 700;

    //超出省略...
    overflow: hidden;  
    text-overflow: ellipsis; 
    display: -webkit-box; 
    -webkit-line-clamp: 2; 
    -webkit-box-orient: vertical;
  }

  .price {
    margin: 8px 0;
  }

  .bottom{

    display:flex;
    align-items:center;
    font-size: 12px;
    font-weight: 600;
    color: ${props => props.theme.text.primaryColor};

    .css-hlbajn-MuiRating-label{
      margin-right:-2px;
    }
    
    .count {
      margin: 0 2px 0 4px;
    }
  }
`