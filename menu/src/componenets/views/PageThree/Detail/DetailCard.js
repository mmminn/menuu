import React from 'react'
import { Card } from 'antd';

const DetailCard = () => {
  return (
    <div style={{
      backgroundColor: 'white',
      height: '1000px',
      width: '60%',
      float: 'right',
    }}>
      <Card
        title="메뉴 이름"
        // extra={<a href="#">장바구니 담기</a>}
        style={{
          width: '500px',
          marginTop: '30px',
        }}
      >
        <p>칼로리</p>
        <p>주재료 및 원산지</p>
        <p>가격</p>
        <p>메뉴소개</p>
      </Card>
    </div>
  )
}

export default DetailCard
