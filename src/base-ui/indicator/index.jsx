import PropTypes from 'prop-types'
import React, { memo, useEffect, useRef } from 'react'
import { IndicatorWrapper } from './style'

const Indicator = memo((props) => {
  const { selectedIndex } = props
  const indicatorRef = useRef()
  useEffect(()=>{
    //
    const selectedItem = indicatorRef.current.children[selectedIndex]
    // showlength 整个Indicator的长度
    const showlength = indicatorRef.current.clientWidth
    // 单个指示器本身的大小
    const itemLength = selectedItem.clientWidth
    // 指示器的相对偏移量
    const itemLeft = selectedItem.offsetLeft
    // 所有可指示元素的长度
    const allItemlength = indicatorRef.current.scrollWidth
    // 指示器可移动的长度
    const totalDistance = allItemlength - showlength
    let translength = itemLeft + 0.5 * itemLength - showlength * 0.5
    if (translength < 0) translength = 0;
    if (translength > totalDistance) translength = totalDistance
    // console.log(selectedIndex,totalDistance,translength)
    indicatorRef.current.style.transform = `translate(${-translength}px)`
  },[selectedIndex])
  return (
    <IndicatorWrapper>
      <div className="i-content" ref={indicatorRef} >
        {props.children}
      </div>
    </IndicatorWrapper>
  )
})

Indicator.propTypes = {
  selectedIndex: PropTypes.number
}

export default Indicator