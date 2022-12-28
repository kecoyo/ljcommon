import React, { useState } from 'react';
import { Space, Button, Popup, Event, EVENT_POPUP_CLOSE, Page } from 'ljcommon';
import { DemoBlock } from 'demos';

window.emitEvent = () => {
  Event.emit(EVENT_POPUP_CLOSE);
};

export default () => {
  const [visible1, setVisible1] = useState(true);
  const [visible2, setVisible2] = useState(false);

  return (
    <Page title='基础用法'>
      <DemoBlock title='多层堆叠'>
        <Button
          onClick={() => {
            setVisible1(true);
          }}
        >
          展开第一个弹出层
        </Button>
        <Popup
          visible={visible1}
          onMaskClick={() => {
            setVisible1(false);
          }}
          bodyStyle={{ height: '40vh' }}
        >
          <div style={{ padding: '24px' }}>
            <Space direction='vertical'>
              <div>这是弹出层1</div>
              <Button
                onClick={() => {
                  setVisible2(true);
                }}
              >
                展开第二个弹出层
              </Button>
            </Space>
          </div>
        </Popup>
        <Popup
          visible={visible2}
          onMaskClick={() => {
            setVisible2(false);
          }}
          bodyStyle={{ height: '20vh' }}
        >
          <div style={{ padding: '24px' }}>
            <div>这是弹出层2</div>
          </div>
        </Popup>
      </DemoBlock>
    </Page>
  );
};
