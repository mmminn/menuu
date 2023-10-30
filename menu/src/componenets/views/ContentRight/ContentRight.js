import React from 'react'
import Map from './Map'
import Search from './Search'
import ShopBtn from './ShopBtn'
import Video from './Video'

const ContentRight = () => {
  return (
    <div style={{
      // backgroundColor: '#001529',
      backgroundColor: 'white',
      height: '1000px',
      width: '30%',
      float: 'right',
    }}>
      <Map></Map>
      <Search></Search>
      <ShopBtn></ShopBtn>
      <Video></Video>
    </div>
  )
}

export default ContentRight