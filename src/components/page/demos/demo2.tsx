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
    <Page back='返回' left='关闭' right={right}>
      <DemoBlock title='不显示标题'></DemoBlock>
    </Page>
  );
};
