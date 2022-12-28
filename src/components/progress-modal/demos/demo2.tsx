import React from 'react';
import { Button, Page, ProgressModal, ProgressModalStartHandler } from 'ljcommon';
import { DemoBlock } from 'demos';

import styles from './demo1.less';

export default () => {
  const handleOpen = async () => {
    const handler: ProgressModalStartHandler = ProgressModal.start({
      message: progress => (progress <= 30 ? '加载学情数据' : progress <= 50 ? '加载错题本数据' : '快完了，别着急'),
    });

    // 随机一个时间完成进度
    setTimeout(() => {
      handler.stop();
    }, 10000);
  };

  return (
    <Page title='自动进度'>
      <DemoBlock title='自动进度'>
        <Button color='primary' onClick={handleOpen}>
          打开进度弹窗
        </Button>
      </DemoBlock>
    </Page>
  );
};
