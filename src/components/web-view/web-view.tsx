import React, { FC } from 'react';
import classNames from 'classnames';
import { mergeProps } from 'antd-mobile/es/utils/with-default-props';
import { NativeProps, withNativeProps } from 'antd-mobile/es/utils/native-props';
import { toCSSLength } from 'antd-mobile/es/utils/to-css-length';
import { isWindows } from '../../utils/platform';

const classPrefix = `ljm-web-view`;

export type WebViewProps = {
  src: string;
  width?: number | string;
  height?: number | string;
} & NativeProps<'--width' | '--height'>;

const defaultProps = {};

export const WebView: FC<WebViewProps> = p => {
  const props = mergeProps(defaultProps, p);

  const style: WebViewProps['style'] = {};
  if (props.width) {
    style['--width'] = toCSSLength(props.width);
    style['width'] = toCSSLength(props.width);
  }
  if (props.height) {
    style['--height'] = toCSSLength(props.height);
    style['height'] = toCSSLength(props.height);
  }

  return withNativeProps(
    props,
    <div
      className={classNames(classPrefix, {
        [`${classPrefix}-windows`]: isWindows(),
      })}
      style={style}
    >
      <iframe src={props.src} />
    </div>
  );
};
