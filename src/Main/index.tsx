/**
 * Created by tony on 2019-12-16
 */
import React from 'react'
import './index.less'

const Main = (props) => {

  function unUsed() {
    console.log(1)
  }

  function onClick() {
    props.onChange && props.onChange()
  }

  return <div className="main" onClick={onClick}>Main</div>
}

export default Main
