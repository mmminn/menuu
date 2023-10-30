import React from 'react';
import { Divider, List, Typography } from 'antd';
const data = [
  '[공지]',
  '[공지]',
  '[공지]',
  '[공지]',
  '[공지]',
];
const Gong = () => (
  <>
    <Divider orientation="center" style={{marginTop: '40px'}}>공지사항</Divider>
    <List style={{width: "70%", margin:'auto auto' }}
      size="small"
      bordered
      dataSource={data}
      renderItem={(item) => <List.Item>{item}</List.Item>}
    />
  </>
);
export default Gong;