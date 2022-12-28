import React, { ReactNode, FC } from 'react';
import classNames from 'classnames';
import { mergeProps } from 'antd-mobile/es/utils/with-default-props';
import { NativeProps, withNativeProps } from 'antd-mobile/es/utils/native-props';
import NavBar, { NavBarProps } from 'antd-mobile/es/components/nav-bar';
import { pick } from '../../utils/objects';

const classPrefix = `ljm-page`;

export const NATIVE_PROPS = ['className', 'style', 'tabIndex'];
export const NAV_BAR_PROPS = ['back', 'backArrow', 'onBack', 'left', 'right'];
export const PAGE_PROPS = [...NAV_BAR_PROPS, 'title', 'color'];

export type PageProps = {
  title?: string;
  color?: 'default' | 'primary' | string;
  children?: ReactNode;
} & NavBarProps &
  NativeProps;

const defaultProps = {
  color: 'default',
};

export const Page: FC<PageProps> = p => {
  const props = mergeProps(defaultProps, p);

  const navBarProps = pick(props, NAV_BAR_PROPS);

  return withNativeProps(
    props,
    <div
      className={classNames(classPrefix, {
        [`${classPrefix}-${props.color}`]: props.color,
        [`${classPrefix}-notitle`]: !props.title,
      })}
    >
      <NavBar
        className={`${classPrefix}-header`}
        onBack={() => {
          window.history.go(-1);
        }}
        {...navBarProps}
      >
        {props.title && <span>{props.title}</span>}
      </NavBar>
      <div className={`${classPrefix}-content`}>{props.children}</div>
    </div>
  );
};
