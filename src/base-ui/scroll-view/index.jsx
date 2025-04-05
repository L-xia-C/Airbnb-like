import PropTypes from 'prop-types'
import React, { memo, useEffect, useRef, useState } from 'react'
import { ViewWrapper } from './style'
import IconArrowLeft from '../../assets/svg/icon-arrow-left'
import IconArrowRight from '../../assets/svg/icon-arrow-right'

const ScrollView = memo((props) => {
    const [isLeft, setisLeft] = useState(false)
    const [isRight, setisRight] = useState(false)
    // const [positionIndex,setpositionIndex]=useState(0)
    const positionIndexRef = useRef(0)
    const scrollContentRef = useRef()
    const totalDistanceRef = useRef()
    // 控制按钮是否显示，以及拿到可移动的空间
    useEffect(() => {
        const scrollWidth = scrollContentRef.current.scrollWidth
        const clientWidth = scrollContentRef.current.clientWidth
        const totalDistance = scrollWidth - clientWidth
        totalDistanceRef.current = totalDistance
        setisRight(totalDistance > 0)
    }, []) 
    /*
    这里不去监听props.children的变化：
    1.因为在该项目中由于确保了<HomeSectionV2>有数据才会渲染,所以渲染师props.children一定有数据
    2.在本项目中props.children是tabs,点击后会频繁发生重新渲染，setisRight(totalDistance > 0)会多次判断为true
    但是作为独立组件抽取出去的时候，可能会出问题
    */

    // 点击事件滚动
    const controlClickHandelClick = (isRighgt) => {
        const newInedx = isRighgt ? positionIndexRef.current + 1 : positionIndexRef.current - 1
        positionIndexRef.current = newInedx
        const newOffsetLeft = scrollContentRef.current.children[newInedx].offsetLeft
        scrollContentRef.current.style.transform = `translate(-${newOffsetLeft}px)`
        console.log(newOffsetLeft)
        setisRight(totalDistanceRef.current > newOffsetLeft)
        setisLeft(newOffsetLeft > 0)
    }
    return (
        <ViewWrapper>
            {isLeft && (<div className="control left" onClick={e => controlClickHandelClick(false)}>
                <IconArrowLeft />
            </div>)}
            {isRight && (<div className="control right" onClick={e => controlClickHandelClick(true)}>
                <IconArrowRight />
            </div>)}
            <div className="scroll">
                <div className="scroll-content" ref={scrollContentRef}>
                    {props.children}
                </div>
            </div>
        </ViewWrapper>
    )
})

ScrollView.propTypes = {}

export default ScrollView