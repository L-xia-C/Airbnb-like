import PropTypes from 'prop-types'
import React, { memo, useState } from 'react'
import Indicator from '../../base-ui/indicator'
import { Button } from 'antd'
import { DemoWrapper } from './style'

const Demo = memo((props) => {
  const testData = ["abc", "bcd", "cde", "abd", "opr", "jkl"]
  const [selectedIndex,setSelectedIndex]=useState(0)
  const handleClick=(isNext)=>{
    let newIndex=isNext?selectedIndex+1:selectedIndex-1
    if(newIndex<0) newIndex=testData.length-1
    if(newIndex>testData.length-1) newIndex=0
    setSelectedIndex(newIndex)
    console.log(selectedIndex)
  }
  return (
    <DemoWrapper>
      <div className="control">
        <button onClick={e=>handleClick(false)}>上一个</button>
        <button onClick={e=>handleClick(true)}>下一个</button>
      </div>
      <div className="list">
        <Indicator selectedIndex={selectedIndex}>
          {
            testData.map(item => {
              return <Button key={item}>{item}</Button>
            })
          }
        </Indicator>
      </div>
    </DemoWrapper>

  )
})

Demo.propTypes = {}

export default Demo