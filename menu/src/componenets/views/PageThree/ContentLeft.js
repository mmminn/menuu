import React from 'react'
import { Card } from 'antd';
import AntCard from './AntCard';
import { useNavigate } from 'react-router-dom';
const { Meta } = Card;

const ContentLeft = () => {
  const cardStyle = {
    width: '70%',
    margin: ' 200px auto',
  }
  const navigate = useNavigate();

  function handleUseHistory() {
    navigate('/Menu')
  }

  return (
    <div style={{
      backgroundColor: 'white',
      height: '1000px',
      width: '40%',
      float: 'left',
    }}>
      <Card
        onClick={handleUseHistory}
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
