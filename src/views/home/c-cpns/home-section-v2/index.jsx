import PropTypes from 'prop-types'
import React, { memo,useState,useCallback } from 'react'
import { SectionV2Wrapper } from './style'
import SectionHeader from '@/components/section-header'
import SectionRooms from '@/components/section-list'
import SectionTabs from '@/components/section-tabs'
import SectionFooter from '../../../../components/section-footer'
const HomeSectionV2 = memo((props) => {
    const {infoData}=props

    const initialName = Object.keys(infoData.dest_list)[0]
    const tabsNames=infoData.dest_address?.map(item=>item.name)

    const [name,setName]=useState(initialName)
    const handleTabClick=useCallback((name)=>{
        setName(name)
    },[])
  
    return (
        <SectionV2Wrapper>
            <SectionHeader title={infoData.title} subtitle={infoData.subtitle} />
            <SectionTabs tabNames={tabsNames} tabClick={handleTabClick} />
            <SectionRooms roomList={infoData.dest_list?.[name]} itemWidth={"33.3333%"} />
            <SectionFooter name={name}/>
        </SectionV2Wrapper>
    )
})

HomeSectionV2.propTypes = {
    infoData:PropTypes.object
}

export default HomeSectionV2