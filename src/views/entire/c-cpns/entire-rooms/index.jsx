import React, { memo, useCallback } from 'react'
import { RoomsWrapper } from './style'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import RoomItem from '../../../../components/room-item'
import { changeDetailInfo } from '../../../../store/modules/detail'
import { useNavigate } from 'react-router'
import useScrollRestoration from '../../../../hooks/useScrollRestoration'

const EntireRooms = memo((props) => {
  useScrollRestoration('entire-pagination')
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
    const scrollTop = document.documentElement.scrollTop;
    sessionStorage.setItem('entire-pagination', scrollTop);
    navigate("/detail")
  },[dispatch,navigate])

  return (
    <RoomsWrapper>
      {totalCount > 0 && <h2 className='title'>多达{totalCount}处住处</h2>}
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