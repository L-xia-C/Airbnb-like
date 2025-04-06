import React, { memo, useEffect, useState } from 'react'
import { useDispatch} from 'react-redux'

import { fetchEntireData } from '@/store/modules/entire/createActions'
import { EntireWrapper } from './style'
import EntireFilter from './c-cpns/entire-filter'
import EntireRooms from './c-cpns/entire-rooms'
import EntirePagination from './c-cpns/entire-pagination'


const Entire = memo((props) => {
  const dispatch = useDispatch()
  const [mode,setMode]=useState("pagination")
  useEffect(() => {
    dispatch(fetchEntireData())
  }, [dispatch])
  return (
    <EntireWrapper>
      <EntireFilter />
      <EntireRooms />
      <EntirePagination />
    </EntireWrapper>
  )
})

Entire.propTypes = {}

export default Entire