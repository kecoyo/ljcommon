import { ReactNode } from 'react';
import { show } from './show';
import { ModalProps } from './index';
import { mergeProps } from 'antd-mobile/es/utils/with-default-props';
import { getDefaultConfig } from 'antd-mobile/es/components/config-provider';

export type ModalAlertProps = Omit<ModalProps, 'visible' | 'closeOnAction' | 'actions'> & {
  confirmText?: ReactNode;
  onConfirm?: () => void | Promise<void>;
};

export function _alert(p: ModalAlertProps) {
  const defaultProps = {
    confirmText: getDefaultConfig().locale.Modal.ok,
  };
  const props = mergeProps(defaultProps, p);
  return new Promise<void>(resolve => {
    show({
      ...props,
      closeOnAction: true,
      actions: [
        {
          key: 'confirm',
          primary: true,
          text: props.confirmText,
        },
      ],
      onAction: props.onConfirm,
      onClose: () => {
        props.onClose?.();
        resolve();
      },
    });
  });
}

export function alert(p1: string | ModalAlertProps, p2?: string | ModalAlertProps, p3?: ModalAlertProps) {
  let props = {};

  if (typeof p1 === 'string') {
    if (p1) props = mergeProps(props, { content: p1 });
    if (p1 && p2 && typeof p2 === 'string') props = mergeProps(props, { title: p1, content: p2 });
    if (p1 && p2 && typeof p2 !== 'string') props = mergeProps(props, { content: p1 }, p2 || {});
    if (p1 && p2 && p3) props = mergeProps(props, { title: p1, content: p2 }, p3 || {});
  } else {
    props = mergeProps(props, p1 || {});
  }

  return _alert({ ...props });
}
