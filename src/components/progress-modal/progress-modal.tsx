import React, { FC } from 'react';
import classNames from 'classnames';
import { mergeProps } from 'antd-mobile/es/utils/with-default-props';
import { withNativeProps } from 'antd-mobile/es/utils/native-props';
import Space from 'antd-mobile/es/components/space';
import ProgressBar from 'antd-mobile/es/components/progress-bar';
import Modal, { ModalProps } from '../modal';

const classPrefix = `ljm-progress-modal`;

export type ProgressModalProps = {
  percent?: number;
  message?: string;
} & ModalProps;

const defaultProps = {
  percent: 0,
  message: '数据处理中...',
};

export const ProgressModal: FC<ProgressModalProps> = p => {
  const props = mergeProps(defaultProps, p);

  const title = '下载进度';

  const content = (
    <Space className={`${classPrefix}-content`} direction='vertical'>
      <div className={`${classPrefix}-percent`}>{props.percent}%</div>
      <ProgressBar percent={props.percent} />
      <div className={`${classPrefix}-message`}>{props.message}</div>
    </Space>
  );

  return withNativeProps(props, <Modal className={classNames(classPrefix)} title={title} content={content} closeOnEvent={false} {...props} />);
};
