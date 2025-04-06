import React, { memo } from 'react'
import Pagination from '@mui/material/Pagination';
import { PaginationWrapper } from './style'
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import { fetchEntireData } from '../../../../store/modules/entire/createActions';

const EntirePagination = memo((props) => {
  const { roomList, currentPage, totalCount } = useSelector((state) => (
    {
      currentPage: state.entire.currentPage,
      totalCount: state.entire.totalCount,
      roomList: state.entire.roomList
    }
  ), shallowEqual)

  const dispatch = useDispatch()
  const handleChange = (event, value) => {
    dispatch(fetchEntireData(value - 1))
    window.scrollTo({
      top:0,
      behavior:"smooth"
    })
  }
  return (
    <PaginationWrapper>
      {
        !!roomList.length && <div className="info">
          <Pagination count={Math.ceil(totalCount / 20)} onChange={handleChange} />
          <div className="desc">
            第{currentPage * 20 + 1}-{(currentPage + 1) * 20}个房源，共{totalCount}个
          </div>
        </div>
      }

    </PaginationWrapper>
  )
})

EntirePagination.propTypes = {}

export default EntirePagination