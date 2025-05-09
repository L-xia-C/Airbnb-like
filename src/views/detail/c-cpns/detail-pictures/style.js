import styled from "styled-components";

export const PictureWrapper = styled.div`
position:relative;
> .pictures {
    display: flex;
    height: 600px;
    background-color: #000;

    /* 如果鼠标放在pictures时候，全部暗下区，但是具体的那个可以亮起来 */
    &:hover {
      .cover {
        opacity: 1 !important;
      }

      .item:hover {
        .cover {
          opacity: 0 !important;
        }
      }
    }
  }
  .left, .right {
    width: 50%;
    height: 100%;

    .item {
      position: relative;
      height: 100%;
      overflow: hidden; /* 隐藏放大后超出的部分 */
      cursor: pointer;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;

        transition: transform 0.3s ease-in;
      }

      .cover {
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        background-color: rgba(0,0,0,.3);
        opacity: 0; /* 手指不在这个区域时，全部亮起 */
        transition: opacity 200ms ease;
      }
      
      &:hover {
        img {
          transform: scale(1.08);
        }
      }
    }
  }
  .right {
    display: flex;
    flex-wrap: wrap;

    .item {
      width: 50%;
      height: 50%;
      box-sizing: border-box;
      border: 1px solid #000;
    }
  }
  .show-btn{
    position:absolute;
    right:15px;
    bottom:15px;
    line-height:22px;
    padding:6px 15px;
    border-radius:4px;
    background-color:#fff;
    cursor: pointer;
  }
`