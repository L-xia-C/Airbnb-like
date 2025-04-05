import React, { memo, useState } from 'react'

import { FilterWrapper } from './style'
import filterData from '@/assets/data/filter_data.json'
import classNames from 'classnames'
const EntireFilter = memo((props) => {
    const [selectItems,setSelectItems]=useState([])
    const itemClikHandle=(item)=>{
        const newItems=[...selectItems]
        newItems.includes(item)?newItems.splice(newItems.indexOf(item),1):newItems.push(item)
        setSelectItems(newItems)
    }
  return (
    <FilterWrapper>
        <div className="filter">
            {
                filterData.map(item=>{
                    return <div 
                    className={classNames("item",{"active":selectItems.includes(item)})}
                    key={item} 
                    onClick={e=>itemClikHandle(item)}
                    >{item}</div>
                })
            }
        </div>
    </FilterWrapper>
  )
})

EntireFilter.propTypes = {}

export default EntireFilter