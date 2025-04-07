import React, { memo } from 'react'
import { DetailWrapper } from './style'
import DetailPictures from './c-cpns/detail-pictures'
import DetailInfos from './c-cpns/detail-info'
import AppFooter from '../../components/app-footer'

const Detail = memo(() => {

  return (
    <>
    <DetailWrapper>
      <DetailPictures/>
      <DetailInfos/>
    </DetailWrapper>
    <AppFooter/>
    </>
  )
})

export default Detail