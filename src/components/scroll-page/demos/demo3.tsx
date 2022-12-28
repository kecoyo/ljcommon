import React, { useState } from 'react';
import { ScrollPage, List, Image } from 'ljcommon';
import { DemoBlock } from 'demos';
import { useMemoizedFn, useMount } from 'ahooks';

import styles from './demo1.less';

const pageSize = 10;
const maxPage = 3;

const getList = (page: number) => {
  return new Promise<Array<any>>(resolve => {
    setTimeout(() => {
      if (page <= maxPage) {
        const start = (page - 1) * pageSize;
        const list = [];
        for (let i = 0; i < pageSize; i++) {
          list.push({
            id: start + i,
            avatar:
              'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9',
            name: 'User ' + (start + i),
            description: 'Animi eius expedita, explicabo',
          });
        }
        resolve(list);
      } else {
        resolve([]);
      }
    }, 1000);
  });
};

export default () => {
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
    setListData({
      loading: false,
      list: [...list, ...curList],
      page: curPage,
      hasMore: curList.length > 0,
    });
  });

  return (
    <ScrollPage
      className={styles.scrollPage}
      title='下拉刷新/上拉加载'
      loading={loading}
      onPullDownRefresh={onPullDownRefresh}
      onPullUpLoad={onPullUpLoad}
      hasMore={hasMore}
      isEmpty={list.length === 0}
    >
      <List header='用户列表'>
        {list.map((user, index) => (
          <List.Item
            key={user.name}
            prefix={<Image src={user.avatar} style={{ borderRadius: 20 }} fit='cover' width={40} height={40} />}
            description={user.description}
          >
            {user.name}
          </List.Item>
        ))}
      </List>
    </ScrollPage>
  );
};
