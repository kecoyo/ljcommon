import React from 'react';
import { TabsPage } from 'ljcommon';
import { DemoBlock } from 'demos';

import styles from './demo1.less';

export default () => {
  return (
    <TabsPage style={{ '--tab-content-padding': '30px' }}>
      <TabsPage.Tab title='原卷' key='origin'>
        <input />
      </TabsPage.Tab>
      <TabsPage.Tab title='学情分析' key='xueqing'>
        <input />
      </TabsPage.Tab>
    </TabsPage>
  );
};
