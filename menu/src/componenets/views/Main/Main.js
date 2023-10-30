import React from 'react';
import { Layout, Space } from 'antd';
import ContentLeft from '../ContentLeft/ContentLeft';
import ContentRight from '../ContentRight/ContentRight'
import BarTwo from '../BarTwo/BarTwo';
import Top from '../Top/Top';

function Main() {

  return (
    <>
      <Space
        direction="vertical"
        style={{
          width: '100%',
        }}
        size={[0, 48]}
      >
        <Layout>
          <Top></Top>
          <BarTwo />
          <div style={{ overflow: 'hidden' }}>
            <ContentLeft></ContentLeft>
            <ContentRight></ContentRight>
          </div>
        </Layout>
      </Space>
    </>
  );
}
export default Main;