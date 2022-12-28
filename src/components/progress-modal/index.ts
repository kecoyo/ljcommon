import './progress-modal.less';
import { attachPropertiesToComponent } from 'antd-mobile/es/utils/attach-properties-to-component';
import { ProgressModal } from './progress-modal';
import { show } from './show';
import { start } from './start';
import { clear } from './clear';

export type { ProgressModalProps } from './progress-modal';

export type { ProgressModalShowProps, ProgressModalShowHandler } from './show';
export type { ProgressModalStartProps, ProgressModalStartHandler } from './start';

export default attachPropertiesToComponent(ProgressModal, {
  show,
  start,
  clear,
});
