import { FacebookOutlined, InstagramOutlined, YoutubeOutlined, WechatOutlined } from '@ant-design/icons';
import { Layout } from 'antd';

function Footer() {
  return (
    <div style={{
      height: '40px',
      display: 'grid',
      alignContent: 'center',
      justifyContent: 'center',
      fontSize: '1.2rem',
      // backgroundColor: '#001529',
      backgroundColor: 'white',
      // color: '#FFF',
      color: 'black',
    }}>
      <div><FacebookOutlined /> <InstagramOutlined /> <YoutubeOutlined /> <WechatOutlined /></div>
    </div>
  );
}

export default Footer;