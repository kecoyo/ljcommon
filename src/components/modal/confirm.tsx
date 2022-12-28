import { ReactNode } from 'react';
import { show } from './show';
import { ModalProps } from './index';
import { mergeProps } from 'antd-mobile/es/utils/with-default-props';
import { getDefaultConfig } from 'antd-mobile/es/components/config-provider';

export type ModalConfirmProps = Omit<ModalProps, 'visible' | 'closeOnAction' | 'actions'> & {
  confirmText?: ReactNode;
  cancelText?: ReactNode;
  onConfirm?: () => void | Promise<void>;
  onCancel?: () => void | Promise<void>;
};

const defaultProps = {
  confirmText: '确认',
  cancelText: '取消',
};

export function _confirm(p: ModalConfirmProps) {
  const { locale } = getDefaultConfig();
  const props = mergeProps(
    defaultProps,
    {
      confirmText: locale.common.confirm,
      cancelText: locale.common.cancel,
    },
    p
  );
  return new Promise<boolean>(resolve => {
    show({
      ...props,
      closeOnAction: true,
      onClose: () => {
        props.onClose?.();
        resolve(false);
      },
      actions: [
        [
          {
            key: 'cancel',
            text: props.cancelText,
            onClick: async () => {
              await props.onCancel?.();
              resolve(false);
            },
          },
          {
            key: 'confirm',
            text: props.confirmText,
            primary: true,
            onClick: async () => {
              await props.onConfirm?.();
              resolve(true);
            },
          },
        ],
      ],
    });
  });
}

export function confirm(p1: string | ModalConfirmProps, p2?: string | ModalConfirmProps, p3?: ModalConfirmProps) {
  let props = {};

  if (typeof p1 === 'string') {
    if (p1) props = mergeProps(props, { content: p1 });
    if (p1 && p2 && typeof p2 === 'string') props = mergeProps(props, { title: p1, content: p2 });
    if (p1 && p2 && typeof p2 !== 'string') props = mergeProps(props, { content: p1 }, p2 || {});
    if (p1 && p2 && p3) props = mergeProps(props, { title: p1, content: p2 }, p3 || {});
  } else {
    props = mergeProps(props, p1 || {});
  }

  return _confirm({ ...props });
}
