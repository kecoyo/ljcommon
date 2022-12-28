import React, { forwardRef, createRef, useImperativeHandle } from 'react';
import { mergeProps } from 'antd-mobile/es/utils/with-default-props';
import { NativeProps, withNativeProps } from 'antd-mobile/es/utils/native-props';
import { pick, omit } from '../../utils/objects';
import ScrollView, { ScrollViewProps, ScrollViewRef } from '../scroll-view';
import Page, { NATIVE_PROPS, PAGE_PROPS, PageProps } from '../page';

const classPrefix = `ljm-scroll-page`;

export type ScrollPageRef = {
  refresh: () => void;
  scrollTo(x: number, y: number, time?: number): void;
  scrollBy(deltaX: number, deltaY: number, time?: number): void;
};

export type ScrollPageProps = {
  onScroll?: (e: { x: number; y: number }) => void;
  onPullDownRefresh?: () => void;
  onPullUpLoad?: () => void;
  hasMore?: boolean;
} & PageProps &
  ScrollViewProps &
  NativeProps;

const defaultProps = {};

export const ScrollPage = forwardRef<ScrollPageRef, ScrollPageProps>((p, ref) => {
  const props = mergeProps(defaultProps, p);
  const scrollViewRef = createRef<ScrollViewRef>();

  const pageProps = pick(props, PAGE_PROPS);
  const scrollViewProps = omit(props, PAGE_PROPS, NATIVE_PROPS);

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

  return withNativeProps(
    props,
    <Page className={classPrefix} {...pageProps}>
      <ScrollView ref={scrollViewRef} {...scrollViewProps}>
        {props.children}
      </ScrollView>
    </Page>
  );
});
