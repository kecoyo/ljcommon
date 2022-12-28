import React, { FC, ReactNode } from 'react';
import { mergeProps } from 'antd-mobile/es/utils/with-default-props';
import classNames from 'classnames';
import { Action, ModalActionButton } from './modal-action-button';
import Image from 'antd-mobile/es/components/image';
import AutoCenter from 'antd-mobile/es/components/auto-center';
import { NativeProps } from 'antd-mobile/es/utils/native-props';
import CenterPopup, { CenterPopupProps } from 'antd-mobile/es/components/center-popup';
import { useUpdateEffect } from 'ahooks';
import Event, { EVENT_POPUP_CLOSE } from '../event';

export type ModalProps = Pick<
  CenterPopupProps,
  | 'afterClose'
  | 'afterShow'
  | 'bodyClassName'
  | 'bodyStyle'
  | 'destroyOnClose'
  | 'disableBodyScroll'
  | 'forceRender'
  | 'getContainer'
  | 'maskClassName'
  | 'maskStyle'
  | 'stopPropagation'
  | 'visible'
> & {
  image?: string;
  header?: ReactNode;
  title?: ReactNode;
  content?: ReactNode;
  actions?: (Action | Action[])[];
  onAction?: (action: Action, index: number) => void | Promise<void>;
  onClose?: () => void;
  closeOnAction?: boolean;
  closeOnMaskClick?: boolean;
  showCloseButton?: boolean;
  closeOnEvent?: boolean;
} & NativeProps;

const defaultProps = {
  actions: [] as Action[],
  closeOnAction: false,
  closeOnMaskClick: false,
  getContainer: null,
  closeOnEvent: true,
};

export const Modal: FC<ModalProps> = p => {
  const props = mergeProps(defaultProps, p);
  const element = (
    <>
      {!!props.image && (
        <div className={cls('image-container')}>
          <Image src={props.image} alt='modal header image' width='100%' />
        </div>
      )}
      {!!props.header && (
        <div className={cls('header')}>
          <AutoCenter>{props.header}</AutoCenter>
        </div>
      )}
      {!!props.title && <div className={cls('title')}>{props.title}</div>}
      <div className={cls('content')}>{typeof props.content === 'string' ? <AutoCenter>{props.content}</AutoCenter> : props.content}</div>
      <div className={classNames(cls('footer'), props.actions.length === 0 && cls('footer-empty'))}>
        {props.actions.map((row, index) => {
          const actions = Array.isArray(row) ? row : [row];
          return (
            <div className={cls('action-row')} key={index}>
              {actions.map((action, index) => (
                <ModalActionButton
                  key={action.key}
                  action={action}
                  onAction={async () => {
                    await Promise.all([action.onClick?.(), props.onAction?.(action, index)]);
                    if (props.closeOnAction) {
                      props.onClose?.();
                    }
                  }}
                />
              ))}
            </div>
          );
        })}
      </div>
    </>
  );

  useUpdateEffect(() => {
    if (props.onClose && props.closeOnEvent) {
      if (props.visible) {
        Event.addListener(EVENT_POPUP_CLOSE, props.onClose);
      } else {
        Event.removeListener(EVENT_POPUP_CLOSE, props.onClose);
      }
    }
  }, [props.visible]);

  return (
    <CenterPopup
      className={classNames(cls(), props.className)}
      style={props.style}
      afterClose={props.afterClose}
      afterShow={props.afterShow}
      showCloseButton={props.showCloseButton}
      closeOnMaskClick={props.closeOnMaskClick}
      onClose={props.onClose}
      visible={props.visible}
      getContainer={props.getContainer}
      bodyStyle={props.bodyStyle}
      bodyClassName={classNames(cls('body'), props.image && cls('with-image'), props.bodyClassName)}
      maskStyle={props.maskStyle}
      maskClassName={props.maskClassName}
      stopPropagation={props.stopPropagation}
      disableBodyScroll={props.disableBodyScroll}
      destroyOnClose={props.destroyOnClose}
      forceRender={props.forceRender}
    >
      {element}
    </CenterPopup>
  );
};

function cls(name: string = '') {
  return 'adm-modal' + (name && '-') + name;
}
