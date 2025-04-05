import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { LongforWrapper } from './style'
import SectionHeader from '@/components/section-header'
import LongforItem from '../../../../components/longfor-item'
import ScrollView from '../../../../base-ui/scroll-view'

const HomeLonfor = memo((props) => {
  const { infoData } = props
  return (
    <LongforWrapper>
      <SectionHeader title={infoData.title} subtitle={infoData.subtitle} />
      <div className="longfor-list">
        <ScrollView>
          {
            infoData.list.map(item => {
              return <LongforItem itemData={item} key={item.city}></LongforItem>
            })
          }
        </ScrollView>
      </div>
    </LongforWrapper>
  )
})

HomeLonfor.propTypes = {
  infoData: PropTypes.object
}

export default HomeLonfor