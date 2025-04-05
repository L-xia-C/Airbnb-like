import React, { memo, useState } from 'react'
import { PictureWrapper } from './style'
import { shallowEqual, useSelector } from 'react-redux'
import PictureBrowser from '../../../../base-ui/pictures-brower'

const DetailPictures = memo((props) => {
    const [showBrowser, setshowBrowser] = useState(false)
    const { detailInfo } = useSelector((state) => ({
        detailInfo: state.detail.detailInfo
    }), shallowEqual)
    return (
        <PictureWrapper>
            <div className='pictures'>
                <div className='left'>
                    <div className='item' onClick={() => setshowBrowser(true)}>
                        <img src={detailInfo?.picture_urls?.[0]} alt=""/>
                        <div className='cover'></div>
                    </div>
                </div>
                <div className='right'>
                    {
                        detailInfo?.picture_urls?.slice(1, 5).map(item => {
                            return (
                                <div className='item' onClick={() => setshowBrowser(true)}>
                                    <img src={item} key={item} alt=""/>
                                    <div className='cover'></div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className="show-btn" onClick={() => setshowBrowser(true)}>
                显示更多照片
            </div>
            {showBrowser && <PictureBrowser pictureurls={detailInfo.picture_urls} closeBroswer={() => setshowBrowser(false)} />}
        </PictureWrapper>
    )
})

DetailPictures.propTypes = {}

export default DetailPictures