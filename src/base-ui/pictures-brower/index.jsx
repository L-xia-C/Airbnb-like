import PropTypes from 'prop-types'
import React, { memo, useEffect, useState } from 'react'
import { CSSTransition, SwitchTransition } from "react-transition-group"

import { BrowserWrapper } from './style'
import IconClose from '../../assets/svg/incon_close'
import IconArrowLeft from '../../assets/svg/icon-arrow-left'
import IconArrowRight from '../../assets/svg/icon-arrow-right'
import classNames from 'classnames'
import IconTriangleArrowBottom from '../../assets/svg/icon-triangel-arrrow-bottom'
import IconTriangleArrowTop from '../../assets/svg/icon-triangle-arrow-top'
import Indicator from '../indicator'

const PictureBrowser = memo((props) => {
    const [currentIndex, setcurrentIndex] = useState(0)
    const [isNext, setIsNext] = useState(false)
    const [showList, setShowList] = useState(true)

    const { pictureurls, closeBroswer } = props
    /* 当图片浏览器显示出来后，滚动条消失 */
    useEffect(() => {
        document.body.style.overflow = "hidden"
        return () => {
            document.body.style.overflow = "auto"
        }
    }, [])
    const handleBroswerClick = () => {
        if (closeBroswer) closeBroswer()
    }
    const controlClickHandle = (isRight) => {
        let newIndex = isRight ? currentIndex + 1 : currentIndex - 1
        if (newIndex < 0) newIndex = pictureurls.length - 1
        if (newIndex > pictureurls.length - 1) newIndex = 0

        setcurrentIndex(newIndex)
        setIsNext(isRight)
    }
    const bottomItemClickHandle = (index) => {
        setIsNext(index > currentIndex)
        setcurrentIndex(index)
    }
    return (
        <BrowserWrapper $isNext={isNext} $showList={showList}>
            <div className="top">
                <div className="close-btn" onClick={handleBroswerClick}>
                    <IconClose />
                </div>
            </div>
            <div className="slider">
                <div className="control">
                    <div className="btn left" onClick={e => controlClickHandle(false)}>
                        <IconArrowLeft width="77" height="77" />
                    </div>
                    <div className="btn right" onClick={e => controlClickHandle(true)}>
                        <IconArrowRight width="77" height="77" />
                    </div>
                </div>
                <div className="picture">
                    <SwitchTransition mode='in-out'>
                        <CSSTransition
                            key={pictureurls[currentIndex]}
                            classNames="pic"
                            timeout={200}
                        >
                            <img src={pictureurls[currentIndex]} alt="" />
                        </CSSTransition>
                    </SwitchTransition>
                </div>
            </div>
            <div className="preview">
                <div className="info">
                    <div className="desc">
                        <div className="count">
                            <span>{currentIndex + 1}/{pictureurls.length}:</span>
                            <span>room apartment图片{currentIndex + 1}</span>
                        </div>
                        <div className="toggle" onClick={e => setShowList(!showList)}>
                            <span>{showList ? "隐藏": "显示"}照片列表</span>
                            {showList ? <IconTriangleArrowBottom /> : <IconTriangleArrowTop />}
                        </div>
                    </div>
                    <div className="list">
                        <Indicator selectedIndex={currentIndex}>
                        {
                            pictureurls.map((item, index) => {
                                return (
                                    <div
                                        className={classNames("item", { active: currentIndex === index })}
                                        key={item}
                                        onClick={e => bottomItemClickHandle(index)}
                                    >
                                        <img src={item} alt="" />
                                    </div>
                                )
                            })
                        }
                        </Indicator>
                    </div>
                </div>
            </div>
        </BrowserWrapper>
    )
})

PictureBrowser.propTypes = {
    pictureurls: PropTypes.array
}

export default PictureBrowser