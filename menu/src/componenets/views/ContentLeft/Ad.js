import React from 'react';
import { Carousel } from 'antd';
const contentStyle = {
  height: '100%',
  width: '70%',
  margin: '20px auto 0',
  color: '#fff',
  textAlign: 'center',
  background: '#364d79',
};

const Ad = () => (
  <Carousel effect="fade" >
    <div >
      <img style={contentStyle} src='https://cdn.pixabay.com/photo/2010/12/13/10/05/berries-2277_640.jpg'></img>
    </div>
    <div>
      <img style={contentStyle} src='https://cdn.pixabay.com/photo/2017/01/31/09/30/raspberries-2023404_640.jpg'></img>
    </div>
    <div>
      <img style={contentStyle} src='https://cdn.pixabay.com/photo/2017/11/18/17/09/strawberries-2960533_640.jpg'></img>
    </div>
    <div>
      <img style={contentStyle} src='https://cdn.pixabay.com/photo/2014/08/26/15/28/jam-428094_640.jpg'></img>
    </div>
  </Carousel>
);
export default Ad;