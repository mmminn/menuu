import React from 'react'
import { EnvironmentOutlined } from '@ant-design/icons';
import { Button, Tooltip, Space } from 'antd';

const ShopBtn = () => {
  const btnStyle= {
    marginRight: '10px',
    marginBottom: '0',
  }
  return (
<p style={{width: '100%'}}>
      <Button style={btnStyle} shape="circle" size='large' icon={<EnvironmentOutlined />} />
      <Button style={btnStyle} shape="circle" size='large' icon={<EnvironmentOutlined />} />
      <Button style={btnStyle} shape="circle" size='large' icon={<EnvironmentOutlined />} />
      <Button shape="circle" size='large' icon={<EnvironmentOutlined />} />
</p>
  
  )
}

export default ShopBtn
