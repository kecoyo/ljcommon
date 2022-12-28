import React from 'react';
import { Button, ProgressModal, ProgressModalShowHandler, sleep, Event, EVENT_POPUP_CLOSE, Page } from 'ljcommon';
import { DemoBlock } from 'demos';
import { useMemoizedFn } from 'ahooks';

import styles from './demo1.less';

window.emitEvent = () => {
  Event.emit(EVENT_POPUP_CLOSE);
};

export default () => {
  const handleOpen = useMemoizedFn(async () => {
    const handler: ProgressModalShowHandler = ProgressModal.show({ percent: 0, message: '开始加载...' });

    for (let i = 0; i < 10; i++) {
      await sleep(1000);
      const index = i + 1;
      if (index * 10 < 100) {
        handler.update({
          percent: index * 10,
          message: '正在生成错题总结...',
        });
      } else if (index * 10 === 100) {
        handler.update({
          percent: index * 10,
          message: '生成完成',
        });
      }
    }

    // await sleep(1000);
    // handler.close();
  });

  return (
    <Page title='基础用法'>
      <DemoBlock title='基础用法'>
        <Button color='primary' onClick={handleOpen}>
          打开进度弹窗
        </Button>
      </DemoBlock>
    </Page>
  );
};
