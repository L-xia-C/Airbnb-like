import PropTypes from 'prop-types'
import React, { memo, useRef, useState } from 'react'
import { Carousel } from 'antd'
import Rating from '@mui/material/Rating';

import { ItemWrapper } from './style'
import IconArrowLeft from '../../assets/svg/icon-arrow-left';
import IconArrowRight from '../../assets/svg/icon-arrow-right';
import Indicator from '../../base-ui/indicator';
import classNames from 'classnames';
const RoomItem = memo((props) => {
    const [selectedIndex, setSelectedIndex] = useState(0)
    const { itemData, itemWidth = "25%",itemClick} = props
    const swiperRef = useRef()
    const handelClick = (e,isRight) => {
        e.stopPropagation()
        isRight ? swiperRef.current.next() : swiperRef.current.prev()
        let newIndex = isRight ? selectedIndex + 1 : selectedIndex - 1
        if (newIndex < 0) newIndex = itemData.picture_urls.length - 1
        if (newIndex > itemData.picture_urls.length - 1) newIndex = 0
        setSelectedIndex(newIndex)
    }
    const toDetial=(itemData)=>{
        if(itemClick){
            itemClick(itemData)
        }
    }
    const singlePic = (
        <div className='cover'>
            <img src={itemData.picture_url} alt=""/>
        </div>
    )
    const swiper = (
        <div className="swiper">
            <div className="control">
                <div className="btn left" onClick={e => handelClick(e,false)}>
                    <IconArrowLeft width="30" height="30" />
                </div>
                <div className="btn right" onClick={e => handelClick(e,true)}>
                    <IconArrowRight width="30" height="30" />
                </div>
            </div>
            <Carousel dots={false} ref={swiperRef}>
                {
                    itemData.picture_urls?.map(item => {
                        return (
                            <div className='cover' key={item}>
                                <img src={item} alt="" />
                            </div>
                        )
                    })
                }
            </Carousel>
            <div className="indcatior">
                <Indicator selectedIndex={selectedIndex}>
                    {
                        itemData.picture_urls?.map((item, index) => {
                            return (
                                <div className="item">
                                    <span className={classNames("dot", { active: selectedIndex === index })}></span>
                                </div>
                            )
                        })
                    }
                </Indicator>
            </div>
        </div>
    )
    return (
        <ItemWrapper
            $verifyColor={itemData.verify_info?.text_color || "#38576a"}
            $itemWidth={itemWidth}
            onClick={e=>toDetial(itemData)}
        >
            <div className='inner'>
                {!itemData.picture_urls? singlePic:swiper}
                <div className='desc'>
                    {itemData.verify_info.messages.join(" · ")}
                </div>
                <div className='name'>{itemData.name}</div>
                <div className='price'>¥{itemData.price}/晚</div>
                <div className="bottom">
                    <Rating
                        precision={0.5}
                        name='read-only'
                        value={itemData.star_rating ?? 5}
                        sx={{ fontSize: "12px", color: "#00848a" }} readOnly />
                    <span className='count'>{itemData.reviews_count}</span>
                    {
                        itemData.bottom_info && <span className='extra'>·{itemData.bottom_info?.content}</span>
                    }
                </div>
            </div>
        </ItemWrapper >
    )
})

RoomItem.propTypes = {
    itemData: PropTypes.object,
    itemWidth: PropTypes.string
}

export default RoomItem