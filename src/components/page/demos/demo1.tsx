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
      <span>文字</span>
    </Space>
  );

  return (
    <Page title='基础用法' back='返回' left='关闭' right={right}>
      <DemoBlock title='基础用法'></DemoBlock>
    </Page>
  );
};
