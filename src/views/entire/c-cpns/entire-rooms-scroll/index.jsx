import React, { memo, useEffect, useRef, useState, useCallback } from 'react'
import { FixedSizeList as List } from 'react-window'
import { EntireRoomsScrollWrapper } from './style'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import RoomItem from '../../../../components/room-item'
import { useNavigate } from 'react-router'
import { fetchRoomListAction } from '../../../../store/modules/entire/createActions'
import { throttle } from '../../../../utils/throttle'
import { changeDetailInfo } from '../../../../store/modules/detail'
import useScrollRestoration from '../../../../hooks/useScrollRestoration'

const EntireRoomsScroll = memo(({handleshowFooter }) => {
    useScrollRestoration("entire-scroll")
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [windowHeight, setWindowHeight] = useState(window.innerHeight)
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)
    // 从redux中区数据
    const { roomList, totalCount, currentPage, isLoading } = useSelector(state => ({
        roomList: state.entire.roomList,
        totalCount: state.entire.totalCount,
        currentPage: state.entire.currentPage,
        isLoading: state.entire.isLoading
    }), shallowEqual)
    // RoomItems跳转
    const handleItemClick = useCallback(itemData => {
        dispatch(changeDetailInfo(itemData))
        const scrollTop = document.documentElement.scrollTop;
        sessionStorage.setItem('entire-scroll', scrollTop);
        navigate("/detail")
    }, [dispatch, navigate])
    const listRef = useRef()
    // 监听页面调整
    useEffect(() => {
        const handleResize = () => {
          setWindowHeight(window.innerHeight);
          setWindowWidth(window.innerWidth);
        };
        window.addEventListener('resize', handleResize);
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);
    // 无限滚动逻辑（加载更多数据）
    useEffect(() => {
        roomList.length < totalCount ? handleshowFooter(false) : handleshowFooter(true)
        const handleScroll = throttle(() => {
            // {当前滚动高度，当前可视区域高度，整个页面高度}
            const { scrollTop, clientHeight, scrollHeight } = document.documentElement
            if (scrollTop + clientHeight >= scrollHeight - 600 && !isLoading && roomList.length < totalCount) {
                dispatch(fetchRoomListAction(currentPage + 1, true))
            }
        }, 300)

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [currentPage, isLoading, dispatch, roomList, totalCount, handleshowFooter])
    // 虚拟列表随页面滚动联动
    useEffect(() => {
        const onScroll = () => {
            if (listRef.current) {
                const offsetTop = listRef.current._outerRef.getBoundingClientRect().top
                listRef.current.scrollTo(-offsetTop)
            }
        }
        window.addEventListener('scroll', onScroll, { passive: true })
        return () => window.removeEventListener('scroll', onScroll)
    }, [])
    // 虚拟化每行元素渲染
    const Row = useCallback(({ index, style }) => {
        const startIndex = index * 5
        const endIndex = Math.min(startIndex + 5, roomList.length)
        return (
            <div style={{ ...style, display: 'flex'}}>
                {roomList.slice(startIndex, endIndex).map(item => (
                    <RoomItem
                        key={item._id}
                        itemData={item}
                        itemWidth="20%"
                        itemClick={handleItemClick}
                    />
                ))}
            </div>
        )
    }, [roomList, handleItemClick])
    const itemSize = ((windowWidth-56)/5)
    const itemCount = Math.ceil(roomList.length / 5)
    const listContentHeight = itemCount * itemSize;
    return (
        <EntireRoomsScrollWrapper>
            {totalCount > 0 && <h2 className='title'>多达{totalCount}处住处</h2>}
            <div className="list">
                <List
                    ref={listRef}
                    height={windowHeight - 150}
                    itemCount={itemCount}
                    itemSize={itemSize}
                    width="100%"
                    style={{ overflow: 'visible' }}
                >
                    {Row}
                </List>
                <div style={{ height: `${listContentHeight - windowHeight + 150}px`, width: "1px" }}></div>
            </div>
        </EntireRoomsScrollWrapper>
    )
})

export default EntireRoomsScroll
