import PropTypes from 'prop-types'
import React, { memo, useCallback } from 'react'
import { RoomsWrapper } from './style'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import RoomItem from '../../../../components/room-item'
import { changeDetailInfo } from '../../../../store/modules/detail'
import { useNavigate } from 'react-router'

const EntireRooms = memo((props) => {
  const { roomList, totalCount, isLoading } = useSelector((state) => (
    {
      roomList: state.entire.roomList,
      totalCount: state.entire.totalCount,
      isLoading: state.entire.isLoading
    }
  ), shallowEqual)
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const handleItemClick=useCallback((itemData)=>{
    dispatch(changeDetailInfo(itemData))
    navigate("/detail")
  },[dispatch])

  return (
    <RoomsWrapper>
      <h2 className='title'>多达{totalCount}处住处</h2>
      <div className="list">
        {
          roomList.map(item => {
            return (
              <RoomItem itemData={item} itemWidth="20%" key={item._id} itemClick={handleItemClick}></RoomItem>
            )
          })
        }
        {isLoading && <div className='cover'></div>}
      </div>
    </RoomsWrapper>
  )
})

EntireRooms.propTypes = {}

export default EntireRooms