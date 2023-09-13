import React from 'react';
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, message, Space } from 'antd';
import { useNavigate } from 'react-router-dom';


export default  function Shop() {
  const navigate = useNavigate();

  const onClick = ({ key }) => {
    //message.info(`Click on item ${key}`);

    if (key === '2') {
      navigate('/products');
    }
  };

  const items = [
    {
      label: 'Categories',
      key: '1',
    },
    {
      label: 'Shop',
      key: '2',
    },
    {
      label: 'Auction',
      key: '3',
    },
  ];

  return (
    <Dropdown
      menu={{
        items,
        onClick,
      }}
    >
      <a onClick={(e) => e.preventDefault()}>
        <Space>
          Marketplace
          <DownOutlined />
        </Space>
      </a>
    </Dropdown>
  );
}


