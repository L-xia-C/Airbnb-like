import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from "react-redux"

import { isEmptyO } from '@/utils/is-empty-object'
import { HomeWrapper } from './style'
import HomeBanner from './c-cpns/home-banner'
import { fetchHomeDataAction } from '@/store/modules/home'
import HomeSectionV1 from './c-cpns/home-section-v1'
import HomeSectionV2 from './c-cpns/home-section-v2'
import HomeSectionV3 from './c-cpns/home-section-v3'
import HomeLonfor from './c-cpns/home-longfor'
import AppFooter from '../../components/app-footer'


const Home = memo(() => {

  const { goodPriceinfo, highScoreInfo, discountInfo, hotDestInfo, longforInfo, homePlusInfo } = useSelector((state) => ({
    goodPriceinfo: state.home.goodPriceinfo,
    highScoreInfo: state.home.highScoreInfo,
    discountInfo: state.home.discountInfo,
    hotDestInfo: state.home.hotDestInfo,
    longforInfo: state.home.longforInfo,
    homePlusInfo: state.home.homePlusInfo
  }), shallowEqual)

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchHomeDataAction())
  }, [dispatch])
  return (
    <>
      <HomeWrapper>
        <HomeBanner />
        <div className='content'>
          {isEmptyO(discountInfo) && <HomeSectionV2 infoData={discountInfo} />}
          {isEmptyO(hotDestInfo) && <HomeSectionV2 infoData={hotDestInfo} />}
          {isEmptyO(longforInfo) && <HomeLonfor infoData={longforInfo} />}
          {isEmptyO(goodPriceinfo) && <HomeSectionV1 infoData={goodPriceinfo} />}
          {isEmptyO(highScoreInfo) && <HomeSectionV1 infoData={highScoreInfo} />}
          {isEmptyO(homePlusInfo) && <HomeSectionV3 infoData={homePlusInfo} />}
        </div>
      </HomeWrapper>
      <AppFooter />
    </>
  )
})

export default Home