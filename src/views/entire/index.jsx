import React, { memo, useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { EntireWrapper } from './style'
import EntireFilter from './c-cpns/entire-filter'
import EntireRooms from './c-cpns/entire-rooms'
import EntirePagination from './c-cpns/entire-pagination'
import { changeCurrentPageAction, changeRoomListAction, fetchRoomListAction } from '../../store/modules/entire/createActions'
import AppFooter from '../../components/app-footer'
import EntireRoomsScroll from './c-cpns/entire-rooms-scroll'
import useScrollRestoration from '../../hooks/useScrollRestoration'

const Entire = memo((props) => {
  useScrollRestoration("entire-pagination")
  const dispatch = useDispatch()
  const roomList = useSelector(state => state.entire.roomList)
  // 存一下当前会话的偏好
  const [pagination, setPagination] = useState(() => {
    const stored = sessionStorage.getItem('pagination')
    return stored === null ? true : stored === 'true'
  })
  const [showFooter, setShowFooter] = useState(true)

  useEffect(() => {
    if (roomList.length === 0) {
      dispatch(fetchRoomListAction())
    }
  }, [dispatch, pagination,roomList.length])

  const toggleMode = () => {
    const newPagination = !pagination
    dispatch(changeCurrentPageAction(0))
    dispatch(changeRoomListAction([]))
    setPagination(newPagination)
    sessionStorage.setItem('pagination', newPagination) // 存储到 sessionStorage
  }

  const handleshowFooter = useCallback((flag) => {
    setShowFooter(flag)
  }, [])
  return (
    <>
      <EntireWrapper>
        <EntireFilter />
        <div onClick={toggleMode} className='changeButton'>
          {pagination ? '无限' : '分页'}
        </div>
        {/* <EntireRooms pagination={pagination} handleshowFooter={handleshowFooter} /> */}
        {pagination ? <EntireRooms/> : <EntireRoomsScroll handleshowFooter={handleshowFooter}/>}
        {pagination && <EntirePagination />}
      </EntireWrapper>
      {showFooter && <AppFooter />}
    </>
  )
})

Entire.propTypes = {}

export default Entire