import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { SectionV3Wrapper } from './style'
import SectionHeader from '../../../../components/section-header'
import RoomItem from '../../../../components/room-item'
import ScrollView from '../../../../base-ui/scroll-view'

const HomeSectionV4 = memo((props) => {
    const {infoData}=props
  return (
    <SectionV3Wrapper>
        <SectionHeader title={infoData.title} subtitle={infoData.subtitle}></SectionHeader>
        <ScrollView>
            {
                infoData.list.map(item=>{
                    return <RoomItem itemWidth="20%" itemData={item}/>
                })
            }
        </ScrollView>
    </SectionV3Wrapper>
  )
})

HomeSectionV4.propTypes = {
    infoData:PropTypes.object
}

export default HomeSectionV4