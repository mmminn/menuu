import { Button, Dropdown, Space } from 'antd'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const buttonStyle = {
  width: '15%',
  height: '80%',
  marginRight: '20px',
  fontSize: '15px',
  backgroundColor: 'white',
  color: 'black',
  border: 'none',
}

const items = [
  {
    key: '1',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="../">
        주문내역
      </a>
    ),
  },
  {
    key: '2',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="../">
        회원정보관리
      </a>
    ),
  }
];
const MyPage = () => {

  return (
    <Dropdown menu={{items}} ><Button style={buttonStyle}>마이페이지</Button></Dropdown>
  )
}

export default MyPage
