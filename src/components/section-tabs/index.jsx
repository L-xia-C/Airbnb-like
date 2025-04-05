import PropTypes from 'prop-types'
import React, { memo,useState } from 'react'
import classNames from 'classnames'

import { TabsWrapper } from './style'
import ScrollView from '../../base-ui/scroll-view'

const SectionTabs = memo((props) => {
    const { tabNames=[],tabClick } = props
    const [currentIndex,setCurrentIndex]=useState(0)
    const handleClick=(item,index)=>{
        setCurrentIndex(index)
        tabClick(item)
    }
    return (
        <TabsWrapper>
            <ScrollView>
            {
                tabNames.map((item,index)=>{
                    return (
                        <div 
                        key={index} 
                        className={classNames("item", { active: index === currentIndex })} 
                        onClick={e=>handleClick(item,index)}
                        >
                            {item}
                        </div>
                    )
                })
            }
            </ScrollView>
        </TabsWrapper>
    )
})

SectionTabs.propTypes = {
    tabNames: PropTypes.array
}

export default SectionTabs