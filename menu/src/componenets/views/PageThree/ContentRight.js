import React from 'react'
import AntCard from './AntCard'
import { Row } from 'antd'

const ContentRight = () => {
  return (
    <div style={{
      backgroundColor: 'white',
      height: '1000px',
      width: '50%',
      float: 'right',
    }}>
      <Row gutter={[10, 10]} style={{ marginTop: '20px' }}>
        <AntCard></AntCard>
      </Row>

    </div>
  )
}

export default ContentRight
