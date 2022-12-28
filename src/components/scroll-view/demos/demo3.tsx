import React, { useState, useRef, useEffect } from 'react';
import { Page, ScrollView, ScrollViewRef } from 'ljcommon';
import { DemoBlock } from 'demos';

import styles from './demo1.less';
import { useMount } from 'ahooks';

export const getList = (len = 100) => {
  const array: Array<number> = [];
  for (let i = 0; i < len; i++) {
    array.push(i + 1);
  }
  return array;
};

export default () => {
  const list: Array<number> = getList(100);
  const ref = useRef<ScrollViewRef>(null);

  useEffect(() => {
    setTimeout(() => {
      // 初始定位
      if (ref && ref.current) {
        console.log('🚀 ~ useMount ~ ref.current', ref.current);
        ref.current.scrollTo(0, -600);
      }
    }, 100);
  }, []);

  const handleScroll = (e: {}) => {
    console.log(e); // {x: 0, y: 0}
  };

  return (
    <Page title='滚动事件'>
      <ScrollView ref={ref} onScroll={handleScroll}>
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
