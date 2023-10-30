import React from 'react'
import { Layout, Space } from 'antd';
import { useNavigate } from 'react-router-dom';
const { Header } = Layout;

const Top = () => {
  const headerStyle = {
    textAlign: 'center',
    color: 'black',
    height: 60,
    paddingInline: 50,
    lineHeight: '64px',
    // backgroundColor: '#001529',
    backgroundColor: 'white',
    fontSize: 25,
  };

  const navigate = useNavigate();

  function handleUseHistory() {
    navigate('/')
  }

  return (
    <Header style={headerStyle} onClick={handleUseHistory}>브랜드명</Header>
  )
}

export default Top
