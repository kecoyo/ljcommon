import React, { useState, useRef, useEffect } from 'react';
import { Page, ScrollView, ScrollViewRef } from 'ljcommon';
import { DemoBlock } from 'demos';
import { useMemoizedFn, useMount } from 'ahooks';

import styles from './demo1.less';

const pageSize = 20;
const maxPage = 1;

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
  const ref = useRef<ScrollViewRef>(null);
  const [{ loading, list, page, hasMore }, setListData] = useState({
    loading: true,
    list: new Array<any>(),
    page: 0,
    hasMore: false,
  });

  useMount(async () => {
    await onPullDownRefresh();
  });

  const onPullDownRefresh = useMemoizedFn(async () => {
    const curPage = 1;
    const curList = await getList(curPage);
    console.log('🚀 ~ onPullDownRefresh ~ curList', curList);
    setListData({
      loading: false,
      list: curList,
      page: curPage,
      hasMore: curList.length > 0,
    });
  });

  const onPullUpLoad = useMemoizedFn(async () => {
    const curPage = page + 1;
    const curList = await getList(curPage);
    console.log('🚀 ~ onPullUpLoad ~ curList', curList);
    setListData({
      loading: false,
      list: [...list, ...curList],
      page: curPage,
      hasMore: curList.length > 0,
    });
  });

  const onScroll = useMemoizedFn(async e => {
    console.log('🚀 ~ onScroll ~ e', e);
  });

  return (
    <Page title='下拉刷新/上拉加载'>
      <ScrollView
        ref={ref}
        className={styles.scrollview}
        onScroll={onScroll}
        onPullDownRefresh={onPullDownRefresh}
        onPullUpLoad={onPullUpLoad}
        hasMore={hasMore}
        loading={loading}
        isEmpty={list.length === 0}
      >
        {list.map((item, i) => (
          <div key={i} className={styles.item}>
            {item.id}.{item.name}
          </div>
        ))}
      </ScrollView>
    </Page>
  );
};
