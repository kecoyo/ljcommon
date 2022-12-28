import React, { FC, ReactNode } from 'react';
import classNames from 'classnames';
import Button from 'antd-mobile/es/components/button';
import { NativeProps, withNativeProps } from 'antd-mobile/es/utils/native-props';
import { mergeProps } from 'antd-mobile/es/utils/with-default-props';

export type Action = {
  key: string | number;
  text: ReactNode;
  disabled?: boolean;
  primary?: boolean;
  danger?: boolean;
  warning?: boolean;
  success?: boolean;
  block?: boolean;
  fill?: 'solid' | 'outline' | 'none';
  color?: 'default' | 'primary' | 'success' | 'warning' | 'danger';
  size?: 'mini' | 'small' | 'middle' | 'large';
  shape?: 'default' | 'rounded' | 'rectangular';
  onClick?: () => void | Promise<void>;
} & NativeProps;

const defaultAction = {
  rounded: true,
  fill: 'outline',
  color: 'primary',
  size: 'small',
  shape: 'rounded',
};

export const ModalActionButton: FC<{
  action: Action;
  onAction: () => void | Promise<void>;
}> = props => {
  const action = mergeProps(defaultAction, props.action);
  action.color = action.primary ? 'primary' : action.danger ? 'danger' : action.warning ? 'warning' : action.success ? 'success' : action.color;
  action.fill = action.primary || action.danger || action.warning || action.success ? 'solid' : action.fill;
  return withNativeProps(
    props.action,
    <Button
      key={action.key}
      onClick={props.onAction}
      className={'adm-modal-button'}
      fill={action.fill}
      color={action.color}
      size={action.size}
      shape={action.shape}
      block={action.block}
      loading='auto'
      disabled={action.disabled}
    >
      {action.text}
    </Button>
  );
};
