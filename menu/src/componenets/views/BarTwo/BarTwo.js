import { Button, Dropdown, Space } from 'antd'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import MyPage from './MyPage';
import PageThree from '../PageThree/PageThree';

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
      <a target="_blank" rel="noopener noreferrer" href='../PageThree' >
        메인메뉴
      </a>
    ),
  },
  {
    key: '2',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="../">
        세트메뉴
      </a>
    ),
  },
  {
    key: '3',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="../">
        사이드
      </a>
    ),
  },
  {
    key: '4',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="../">
        음료/주류
      </a>
    ),
  },
];

const BarTwo = () => {
  const navigate = useNavigate();

  function handleUseHistory() {
    navigate('/Two')
  }

  function handleUseHistory2() {
    navigate('/Three')
  }

  function handleUseHistory3() {
    navigate('/Four')
  }

  return (
    <div style={{
      backgroundColor: 'white',
      textAlign: 'center',
      height: '50px',
    }}>
      <Button
        style={buttonStyle}
        onClick={handleUseHistory}
      >공지사항</Button>
      <Dropdown menu={{ items }}><Button onClick={handleUseHistory2} style={buttonStyle}>메뉴소개</Button></Dropdown>
      <Button onClick={handleUseHistory3} style={buttonStyle}>매장조회</Button>
      <MyPage></MyPage>
    </div>
  )
}

export default BarTwo
