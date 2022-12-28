import React from 'react';
import { Page, ScrollView } from 'ljcommon';
import { DemoBlock } from 'demos';

import styles from './demo1.less';

export const getList = (len = 100) => {
  const array: Array<number> = [];
  for (let i = 0; i < len; i++) {
    array.push(i + 1);
  }
  return array;
};

export default () => {
  const list: Array<number> = getList(100);
  return (
    <Page title='基础用法'>
      <ScrollView>
        <div>
          {list.map((num, i) => (
            <div key={num} className={styles.item}>
              {num}
            </div>
          ))}
        </div>
      </ScrollView>
    </Page>
  );
};
