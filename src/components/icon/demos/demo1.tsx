import React from 'react';
import { Space } from 'antd-mobile';
import { Icon } from 'ljcommon';
import { DemoBlock } from 'demos';

import styles from './demo1.less';

const demoSrc = { id: '', viewBox: '' };

export default () => {
  return (
    <div style={{ userSelect: 'none' }}>
      <DemoBlock title='基础用法'>
        <Icon src={demoSrc} />
      </DemoBlock>

      <DemoBlock title='自定义圆角'>
        <Space wrap>
          <Icon src={demoSrc} width={64} height={64} style={{ borderRadius: 4 }} />
          <Icon src={demoSrc} width={64} height={64} style={{ borderRadius: 8 }} />
          <Icon src={demoSrc} width={64} height={64} style={{ borderRadius: 32 }} />
        </Space>
      </DemoBlock>

      <DemoBlock title='通过 CSS 变量统一设置图片大小'>
        <div className={styles.iconsContainer}>
          <Space wrap>
            <Icon src={demoSrc} />
            <Icon src={demoSrc} />
            <Icon src={demoSrc} />
          </Space>
        </div>
      </DemoBlock>
    </div>
  );
};
