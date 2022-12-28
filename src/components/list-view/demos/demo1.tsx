import React, { useState, useRef, useEffect } from 'react';
import { ListView, ListViewRef, Page } from 'ljcommon';
import { DemoBlock } from 'demos';
import { useMemoizedFn, useMount } from 'ahooks';

import styles from './demo1.less';

const pageSize = 20;
const maxPage = 3;

const getList = (page: number) => {
  return new Promise<Array<any>>(resolve => {
    setTimeout(() => {
      if (page <= maxPage) {
        const start = (page - 1) * pageSize;
        const list = [];
        for (let i = 0; i < pageSize; i++) {
          list.push({ id: start + i, name: 'name-' + (start + i) });
        }
        resolve(list);
      } else {
        resolve([]);
      }
    }, 500);
  });
};

export default () => {
  const ref = useRef<ListViewRef>(null);
  const [{ loading, list }, setListData] = useState({
    loading: true,
    list: new Array<any>(),
  });

  useMount(async () => {
    const curList = await getList(1);
    setListData({
      loading: false,
      list: curList,
    });
  });

  const renderItem = (item: { id: string; name: string }, i: number) => {
    return (
      <div key={i} className={styles.item}>
        {item.id}.{item.name}
      </div>
    );
  };

  return (
    <Page title='基础用法'>
      <DemoBlock title='基础用法'>
        <ListView
          ref={ref} //
          className={styles.listView}
          loading={loading}
          list={list}
          renderItem={renderItem}
        />
      </DemoBlock>
    </Page>
  );
};
