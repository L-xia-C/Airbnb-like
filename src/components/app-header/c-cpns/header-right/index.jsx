import React, { memo, useState, useEffect, } from 'react'
import { RightWrapper } from './style'
import GlobalLogo from '@/assets/svg/global'
import IconMenu from '@/assets/svg/icon_menu'
import IconAvatar from "@/assets/svg/icon_avatar"
const HeaderRight = memo(() => {
  const [showPanel, setShowPanel] = useState(false)
  // 副作用代码
  useEffect(() => {
    function windowHandleClick(e) {
      setShowPanel(false)
    }
    window.addEventListener("click", windowHandleClick, true)
    return ()=>{
      window.removeEventListener("click",windowHandleClick,true)
    }
  }, [])
  // 事件处理函数
  function handelPanelShow() {
    setShowPanel(prevState => !prevState);
  }
  return (
    <RightWrapper>
      <div className="btns">
        <span className='btn'>登录</span>
        <span className='btn'>注册</span>
        <span className='btn'>
          <GlobalLogo />
        </span>
      </div>
      <div className="profile" onClick={handelPanelShow}>
        <IconMenu />
        <IconAvatar />
        {showPanel && (
          <div className="panel">
            <div className="top">
              <div className="item register">注册</div>
              <div className="item login">登录</div>
            </div>
            <div className="bottom">
              <div className="item">出租房源</div>
              <div className="item">开展体验</div>
              <div className="item">帮助</div>
            </div>
          </div>
        )}
      </div>
    </RightWrapper>
  )
})

export default HeaderRight