import React from 'react'
import { Card } from 'antd';
import AntCard from './AntCard';
const { Meta } = Card;

const ContentLeft = () => {
  const cardStyle = {
    width: '50%',
    margin: ' 200px auto',
  }

  return (
    <div style={{
      backgroundColor: 'white',
      height: '1000px',
      width: '40%',
      float: 'left',
    }}>
      <Card
        hoverable
        style={cardStyle}
        cover={<img alt="example" src="https://cdn.pixabay.com/photo/2018/05/01/18/21/eclair-3366430_640.jpg" />}
      >
        <Meta title="추천메뉴" description="메뉴 정보" />
      </Card>

    </div>
  )
}

export default ContentLeft
