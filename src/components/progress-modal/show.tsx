import React, { ReactElement } from 'react';
import { ProgressModal, ProgressModalProps } from './progress-modal';
import { renderImperatively2 } from '../../utils/render-imperatively2';

export type ProgressModalShowProps = Omit<ProgressModalProps, 'visible'>;

export type ProgressModalShowHandler = {
  close: () => void;
  replace: (element: ReactElement<ProgressModalShowProps>) => void;
  update: (props: ProgressModalShowProps) => void;
};

export const closeFnSet = new Set<() => void>();

export function show(props: ProgressModalShowProps) {
  const handler: ProgressModalShowHandler = renderImperatively2(
    <ProgressModal
      {...props}
      afterClose={() => {
        closeFnSet.delete(handler.close);
        props.afterClose?.();
      }}
    />
  );
  closeFnSet.add(handler.close);
  return handler;
}
