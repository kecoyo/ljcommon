import React from 'react';
import { Page, WebView } from 'ljcommon';
import { DemoBlock } from 'demos';

import styles from './demo1.less';

const url = 'https://www.ljlx.com/ljlx/public/userprivacy.html';

export default () => {
  return (
    <Page title='基础用法'>
      <WebView src={url} />
    </Page>
  );
};
