import React from 'react';
import { ScrollPage, List, Image, Page } from 'ljcommon';
import { DemoBlock } from 'demos';

import styles from './demo1.less';

const users: Array<any> = [];
for (let i = 0; i < 20; i++) {
  users.push({
    id: i,
    avatar:
      'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9',
    name: 'User ' + i,
    description: 'Animi eius expedita, explicabo',
  });
}

export default () => {
  return (
    <ScrollPage title='基础用法'>
      <List header='用户列表'>
        {users.map((user, index) => (
          <List.Item
            key={user.name}
            prefix={<Image src={user.avatar} style={{ borderRadius: 20 }} fit='cover' width={40} height={40} />}
            description={user.description}
          >
            {user.name}
          </List.Item>
        ))}
      </List>
    </ScrollPage>
  );
};
