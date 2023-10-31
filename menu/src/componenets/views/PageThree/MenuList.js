import React from 'react'
import { Flex } from 'antd';
import AntCard from './AntCard';

const MenuList = () => {
  return (
    <Flex wrap="wrap" gap="large">
    {Array.from(
      {
        length: 24,
      },
      (_, i) => (
        <AntCard key={i}></AntCard>
      ),
    )}
  </Flex>
  )
}

export default MenuList
