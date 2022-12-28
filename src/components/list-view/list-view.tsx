import React, { forwardRef, createRef, useImperativeHandle, ReactNode, useState } from 'react';
import { mergeProps } from 'antd-mobile/es/utils/with-default-props';
import { NativeProps, withNativeProps } from 'antd-mobile/es/utils/native-props';
import ScrollView, { ScrollViewRef } from '../scroll-view';
import { useMemoizedFn, useMount } from 'ahooks';

const classPrefix = `ljm-list-view`;

export type ListViewRef = {
  refresh: () => void;
  scrollTo(x: number, y: number, time?: number): void;
  scrollBy(deltaX: number, deltaY: number, time?: number): void;
};

export type ListViewProps = {
  loading?: boolean;
  initialLoad?: boolean;
  pageStart?: number;
  page?: number;
  onLoad?: (page: number) => void;
  list: Array<any>;
  renderItem: (item: any, index: number) => ReactNode;
  // onPullDownRefresh?: () => void;
  // onPullUpLoad?: () => void;
  pullDownRefresh?: boolean;
  pullUpLoad?: boolean;
  hasMore?: boolean;
  startY?: number;
  onScroll?: (e: { x: number; y: number }) => void;
} & NativeProps;

const defaultProps = {
  pageStart: 1,
  page: 1,
  initialLoad: true,
};

export const ListView = forwardRef<ListViewRef, ListViewProps>((p, ref) => {
  const props = mergeProps(defaultProps, p);
  const scrollViewRef = createRef<ScrollViewRef>();

  useMount(async () => {
    if (props.initialLoad && props.onLoad) {
      await props.onLoad(props.pageStart);
    }
  });

  useImperativeHandle(ref, () => ({
    refresh: () => {
      scrollViewRef?.current?.refresh();
    },
    scrollTo: (x: number, y: number, time?: number) => {
      scrollViewRef?.current?.scrollTo(x, y, time);
    },
    scrollBy: (deltaX: number, deltaY: number, time?: number) => {
      scrollViewRef?.current?.scrollBy(deltaX, deltaY, time);
    },
  }));

  const onPullDownRefresh = useMemoizedFn(async () => {
    if (props.onLoad) {
      await props.onLoad(props.pageStart);
    } else {
      throw new Error('"onLoad" property is undefined.');
    }
  });

  const onPullUpLoad = useMemoizedFn(async () => {
    if (props.onLoad) {
      await props.onLoad(props.page + 1);
    } else {
      throw new Error('"onLoad" property is undefined.');
    }
  });

  return withNativeProps(
    props,
    <ScrollView
      ref={scrollViewRef}
      className={classPrefix}
      loading={props.loading}
      onPullDownRefresh={props.pullDownRefresh ? onPullDownRefresh : undefined}
      onPullUpLoad={props.pullUpLoad ? onPullUpLoad : undefined}
      hasMore={props.hasMore}
      isEmpty={props.list.length === 0}
      startY={props.startY}
      onScroll={props.onScroll}
    >
      {props.list.map(props.renderItem)}
    </ScrollView>
  );
});
