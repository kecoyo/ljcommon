import './tabs-page.less';
import { TabsPage } from './tabs-page';
import { Tab } from 'antd-mobile/es/components/tabs/tabs';
import { attachPropertiesToComponent } from 'antd-mobile/es/utils/attach-properties-to-component';

export type { TabsPageProps } from './tabs-page';

export default attachPropertiesToComponent(TabsPage, {
  Tab,
});
