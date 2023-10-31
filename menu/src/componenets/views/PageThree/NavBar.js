import { Button } from 'antd'
import React from 'react'

const NavBar = () => {
  const buttonStyle = {
    width: '20%',
    height: '80%',
    marginRight: '20px',
    marginTop: '20px',
    fontSize: '15px',
    backgroundColor: 'white',
    color: 'black',
    border: 'none',
  }
  return (
    <div style={{
      backgroundColor: '',
      textAlign: 'center',
      height: '50px',
    }}>
      <Button style={buttonStyle}>메인메뉴</Button>
      <Button style={buttonStyle}>세트메뉴</Button>
      <Button style={buttonStyle}>사이드</Button>
      <Button style={buttonStyle}>음료/주류</Button>

    </div>
  )
}

export default NavBar
