import { AudioOutlined } from '@ant-design/icons';
import React from 'react';
import { Input, Divider } from 'antd';

const Search = () => {
    const { Search } = Input;
    const suffix = (
        <AudioOutlined
            style={{
                fontSize: 16,
                color: '#1677ff',
            }}
        />
    );
    const onSearch = (value, _e, info) => console.log(info?.source, value);
    const searchStyle = {
        width: '90%',
        marginBottom: '10px',
    }
    return (
<p>
            <Search
                placeholder="지점명/위치로 검색"
                onSearch={onSearch}
                style={searchStyle}
            />
            <Divider></Divider>
</p>
    )
}

export default Search