import React from 'react'
import Top from '../Top/Top'
import BarTwo from '../BarTwo/BarTwo'
import NavBar from './NavBar'
import ContentLeft from './ContentLeft'
import ContentRight from './ContentRight'

const PageThree = () => {
  return (
<div>
        <Top></Top>
        <BarTwo></BarTwo>
        <NavBar></NavBar>
        <div style={{ overflow: 'hidden' }}>
            <ContentLeft></ContentLeft>
            <ContentRight></ContentRight>
          </div>
</div>
  )
}

export default PageThree
