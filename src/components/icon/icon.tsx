import React, { forwardRef, useImperativeHandle, useRef } from 'react';
import { mergeProps } from 'antd-mobile/es/utils/with-default-props';
import { NativeProps, withNativeProps } from 'antd-mobile/es/utils/native-props';
import { toCSSLength } from 'antd-mobile/es/utils/to-css-length';

const classPrefix = `ljm-icon`;

type BrowserSpriteSymbol = {
  id: string;
  viewBox: string;
  default?: BrowserSpriteSymbol;
};

export type IconRef = {
  nativeElement: SVGSVGElement | null;
};

export type IconProps = {
  src: BrowserSpriteSymbol;
  width?: number | string;
  height?: number | string;
} & NativeProps<'--width' | '--height'>;

const defaultProps = {};

export const Icon = forwardRef<IconRef, IconProps>((p, ref) => {
  const props = mergeProps(defaultProps, p);
  const nativeSVGRef = useRef<SVGSVGElement>(null);
  const obj: BrowserSpriteSymbol = props.src?.default ? props.src.default : props.src ? props.src : { id: '', viewBox: '' };

  const style: IconProps['style'] = {};
  if (props.width) {
    style['--width'] = toCSSLength(props.width);
    style['width'] = toCSSLength(props.width);
  }
  if (props.height) {
    style['--height'] = toCSSLength(props.height);
    style['height'] = toCSSLength(props.height);
  }

  useImperativeHandle(ref, () => ({
    get nativeElement() {
      return nativeSVGRef.current;
    },
  }));

  return withNativeProps(
    props,
    <svg ref={nativeSVGRef} className={classPrefix} style={style} viewBox={obj.viewBox}>
      <use xlinkHref={`#${obj.id}`} />
    </svg>
  );
});
