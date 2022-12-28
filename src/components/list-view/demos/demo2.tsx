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
    }, 2000);
  });
};

export default () => {
  const ref = useRef<ListViewRef>(null);
  // const [loading, setLoading] = useState(true);
  const [{ loading, list, page, hasMore }, setListData] = useState({
    loading: true,
    list: new Array<any>(),
    page: 1,
    hasMore: false,
  });

  const onLoad = useMemoizedFn(async page => {
    console.log('🚀 ~ onLoad ~ page', page);
    const curList = await getList(page);
    setListData({
      loading: false,
      list: page === 1 ? curList : [...list, ...curList],
      page: page,
      hasMore: curList.length > 0,
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
    <Page title='下拉刷新/上拉加载'>
      <DemoBlock title='下拉刷新/上拉加载'>
        <ListView
          ref={ref} //
          className={styles.listView}
          loading={loading}
          page={page}
          onLoad={onLoad}
          list={list}
          renderItem={renderItem}
          pullDownRefresh
          pullUpLoad
          hasMore={hasMore}
        />
      </DemoBlock>
    </Page>
  );
};
