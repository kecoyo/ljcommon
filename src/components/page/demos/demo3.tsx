import React from 'react';
import { Page, Space } from 'ljcommon';
import { SearchOutline, MoreOutline, CloseOutline } from 'antd-mobile-icons';
import { DemoBlock } from 'demos';

import styles from './demo1.less';

export default () => {
  const right = (
    <Space>
      <SearchOutline />
      <MoreOutline />
    </Space>
  );

  return (
    <Page title='更换主题颜色' color='primary' back='返回' left='关闭' right={right}>
      <DemoBlock title='更换主题颜色'></DemoBlock>
    </Page>
  );
};
