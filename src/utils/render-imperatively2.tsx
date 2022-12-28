import React, { ReactElement } from 'react';
import { ImperativeHandler, renderImperatively } from 'antd-mobile/es/utils/render-imperatively';

type ImperativeProps = {
  visible?: boolean;
  onClose?: () => void;
  afterClose?: () => void;
};

export type ImperativeHandler2 = {
  update: (props: ImperativeProps) => void;
} & ImperativeHandler;

export function renderImperatively2(element: ReactElement<ImperativeProps>) {
  const handler: ImperativeHandler = renderImperatively(element);

  return {
    close: () => {
      handler?.close();
    },
    replace: element => {
      handler?.replace(element);
    },
    update: props => {
      handler?.replace(React.cloneElement(element, props));
    },
  } as ImperativeHandler2;
}
