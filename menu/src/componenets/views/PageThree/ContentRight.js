import React from 'react'
import { Divider } from 'antd'
import MenuList from './MenuList';

const ContentRight = () => {
  return (
    <div style={{
      backgroundColor: 'white',
      height: '1000px',
      width: '60%',
      float: 'right',
    }}>
      <Divider orientation="Center">메뉴 목록</Divider>
      <MenuList></MenuList>
    </div>
  )
}

export default ContentRight
