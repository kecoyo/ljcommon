import { show, ProgressModalShowProps, ProgressModalShowHandler } from './show';

export type ProgressModalStartProps = Omit<ProgressModalShowProps, 'message'> & {
  message: string | ((progress: number) => string);
};

export type ProgressModalStartHandler = {
  stop: (callback?: () => void) => void;
};

export function start(props: ProgressModalStartProps) {
  const getMessage = (val: number) => (typeof props.message === 'function' ? props.message(val) : props.message);
  let progress = 0; // 初始进度

  // 打开进度弹框
  const showHandler: ProgressModalShowHandler = show({
    percent: progress,
    message: getMessage(progress),
  });

  let speed = 0; // 速度
  let timer = 0; // 定时噐

  // 走进度
  const goProgress = (curr: number) => {
    timer = window.setTimeout(() => {
      let progress = curr + 1;
      if (progress > 99) progress = 99;

      // 更新进度
      showHandler.update({
        percent: progress,
        message: getMessage(progress),
      });

      // 控制速度
      if (progress <= 30) {
        speed = 100;
      } else if (progress <= 50) {
        speed = 250;
      } else if (progress <= 70) {
        speed = 500;
      } else if (progress <= 80) {
        speed = 1000;
      } else if (progress <= 90) {
        speed = 1500;
      } else if (progress <= 100) {
        speed = 2000;
      }

      goProgress(progress);
    }, speed);
  };

  goProgress(progress); // 开始

  const onStop = (callback?: () => void) => {
    if (timer) {
      window.clearTimeout(timer);
      timer = 0;
    }

    progress = 100;
    showHandler.update({ percent: progress, message: getMessage(progress) });

    window.setTimeout(() => {
      showHandler.close();
      callback?.();
    }, 500);
  };

  const handler: ProgressModalStartHandler = {
    stop: onStop,
  };
  return handler;
}
