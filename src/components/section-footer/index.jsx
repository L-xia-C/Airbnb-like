import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { FootWrapper } from './style'
import IconMoreArrow from "@/assets/svg/icon_more_arrow"
import { useNavigate } from 'react-router'
const SectionFooter = memo((props) => {
  const {name}=props
  let showMessage="显示更多房源"
  if(name){
    showMessage=`显示更多${name}房源`
  }
  const navigate = useNavigate()
  function moreClickHandle() {
    navigate("/entire")
  }
  return (
    <FootWrapper $color={name?"#00848a":"#000"}>
        <div className="info" onClick={moreClickHandle}>
            <span>{showMessage}</span>
            <IconMoreArrow/>
        </div>
    </FootWrapper>
  )
})

SectionFooter.propTypes = {
  name:PropTypes.string
}

export default SectionFooter