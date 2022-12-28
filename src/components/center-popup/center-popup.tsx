import React, { FC } from 'react';
import { mergeProps } from 'antd-mobile/es/utils/with-default-props';
import { defaultPopupBaseProps } from 'antd-mobile/es/components/popup/popup-base-props';
import AdmCenterPopup, { CenterPopupProps as AdmCenterPopupProps } from 'antd-mobile/es/components/center-popup';
import { useUpdateEffect } from 'ahooks';
import Event, { EVENT_POPUP_CLOSE } from '../event';

export type CenterPopupProps = {
  closeOnEvent?: boolean;
} & AdmCenterPopupProps;

const defaultProps = {
  ...defaultPopupBaseProps,
  getContainer: null,
  closeOnEvent: true,
};

export const CenterPopup: FC<CenterPopupProps> = p => {
  const props = mergeProps(defaultProps, p);

  useUpdateEffect(() => {
    if (props.onClose && props.closeOnEvent) {
      if (props.visible) {
        Event.addListener(EVENT_POPUP_CLOSE, props.onClose);
      } else {
        Event.removeListener(EVENT_POPUP_CLOSE, props.onClose);
      }
    } else if (props.onMaskClick && props.closeOnEvent) {
      if (props.visible) {
        Event.addListener(EVENT_POPUP_CLOSE, props.onMaskClick);
      } else {
        Event.removeListener(EVENT_POPUP_CLOSE, props.onMaskClick);
      }
    }
  }, [props.visible]);

  return <AdmCenterPopup {...props} />;
};
