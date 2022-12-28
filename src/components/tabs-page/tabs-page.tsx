import React, { FC, ReactNode } from 'react';
import classNames from 'classnames';
import { mergeProps } from 'antd-mobile/es/utils/with-default-props';
import { NativeProps, withNativeProps } from 'antd-mobile/es/utils/native-props';
import { NavBarProps } from 'antd-mobile/es/components/nav-bar';
import { Tabs, TabsProps } from 'antd-mobile/es/components/tabs/tabs';
import { Page, NAV_BAR_PROPS } from '../page/page';
import { pick } from '../../utils/objects';

const classPrefix = `ljm-tabs-page`;

export const TABS_PROPS = ['activeKey', 'defaultActiveKey', 'activeLineMode', 'stretch', 'onChange'];

export type TabsPageProps = {
  color?: 'default' | 'primary' | string;
  children?: ReactNode;
} & TabsProps &
  NavBarProps &
  NativeProps<
    | '--tab-bar-height'
    | '--tab-bar-margin'
    | '--tab-bar-border-bottom'
    | '--tab-bar-background-color'
    | '--tab-bar-title-color'
    | '--tab-bar-active-title-color'
    | '--tab-bar-title-font-size'
    | '--tab-bar-active-title-font-size'
    | '--tab-bar-active-line-height'
    | '--tab-bar-active-line-border-radius'
    | '--tab-bar-active-line-color'
    | '--tab-content-padding'
  >;

const defaultProps = {
  color: 'default',
};

export const TabsPage: FC<TabsPageProps> = p => {
  const props = mergeProps(defaultProps, p);
  const navBarProps = pick(props, NAV_BAR_PROPS);
  const tabsProps = pick(props, TABS_PROPS);

  return withNativeProps(
    props,
    <Page
      className={classNames(classPrefix, {
        [`${classPrefix}-${props.color}`]: props.color,
      })}
      color={props.color}
      {...navBarProps}
    >
      <Tabs {...tabsProps}>{props.children}</Tabs>
    </Page>
  );
};
