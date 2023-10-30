import React from 'react'
import Ad from './Ad';
import Gong from './Gong';

function ContentLeft() {

  return (
    <div style={{
      // backgroundColor: '#001529',
      backgroundColor: 'white',
      height: '1000px',
      width: '70%',
      float: 'left',
    }}>
      <Ad></Ad>
      <Gong></Gong>
    </div>
  )
}

export default ContentLeft
