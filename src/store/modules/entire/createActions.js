import * as actionTypes from "./constants"
import { getEntireRoomList } from "@/services/modules/entire"

export const changeCurrentPageAction = (currentPage) => ({
  type: actionTypes.CHANGE_CURRENT_PAGE,
  currentPage
})

export const changeRoomListAction = (roomList) => ({
  type: actionTypes.CHANGE_ROOM_LIST,
  roomList
})

export const changeTotalCountAction = (totalCount) => ({
  type: actionTypes.CHANGE_TOTAL_COUNT,
  totalCount
})


export const changeIsLoadingAction = (isLoading) => ({
  type: actionTypes.CHANGE_IS_LOADING,
  isLoading
})

export const fetchRoomListAction = (page = 0, isLoadMore = false) => {
  return async (dispatch, getState) => {
    dispatch(changeCurrentPageAction(page))
    if (!isLoadMore) {
      dispatch(changeIsLoadingAction(true))
    }

    const res = await getEntireRoomList(page * 20)

    if (!isLoadMore) dispatch(changeIsLoadingAction(false))

    const roomList = res.list
    const totalCount = res.totalCount

    if (isLoadMore) {
      const oldList = getState().entire.roomList
      dispatch(changeRoomListAction([...oldList, ...roomList]))
    } else {
      dispatch(changeRoomListAction(roomList))
      dispatch(changeTotalCountAction(totalCount))
    }
  }
}

