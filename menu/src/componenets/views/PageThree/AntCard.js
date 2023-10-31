import React from 'react';
import { Card, Col } from 'antd';

const AntCard = () => {
  const { Meta } = Card;
    return (
      <Col xs={12} md={6} lg={4}>
      <a href={'./'}>
              <Card
                hoverable
                style={{
                  width: '100%',
                }}
                cover={
                  <img
                    alt="메뉴"
                    src={"https://cdn.pixabay.com/photo/2018/05/01/18/21/eclair-3366430_640.jpg"}
                  />}
              >
                <Meta title="메뉴명" description="메뉴 정보" />
              </Card>
      </a >
      </Col>
    )
  }

export default AntCard