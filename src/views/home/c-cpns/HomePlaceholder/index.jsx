import React, { memo } from 'react'
import Skeleton from '@mui/material/Skeleton';
import { PlaceWrapper } from './sytle';
const Homeplaceholder = memo((props) => {
    const RoomItems = (
        <div className="item">
            <div className="picture">
                <Skeleton width="100%" height="100%"/>
            </div>
            <div className="desc">
                <Skeleton width="100%" height="100%"/>
            </div>
        </div>
    )
    const temparray = new Array(3).fill(0)
    return (
        <PlaceWrapper>
            <Skeleton>
                <div className='header'>
                </div>
            </Skeleton>
            <Skeleton width="100%" height={60}>
            </Skeleton>
            <div className="allcontent">
                {
                    temparray.map((item, index) => {
                        return RoomItems
                    })
                }
            </div>
        </PlaceWrapper>
    )
})

Homeplaceholder.propTypes = {}

export default Homeplaceholder