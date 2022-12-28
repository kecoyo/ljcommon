import React from 'react';
import { Button, Space, Toast, Divider, Modal, Event, EVENT_POPUP_CLOSE, ScrollPage } from 'ljcommon';
import { DemoBlock, DemoDescription, sleep } from 'demos';

window.emitEvent = () => {
  Event.emit(EVENT_POPUP_CLOSE);
};

export default () => {
  return (
    <ScrollPage title='简单用法'>
      <DemoBlock title='Modal.alert'>
        <Space direction='vertical' block>
          <Button block onClick={() => Modal.alert('人在天边月上明')}>
            参数：内容
          </Button>
          <Button block onClick={() => Modal.alert('提示', '人在天边月上明')}>
            参数：标题、内容
          </Button>
          <Button block onClick={() => Modal.alert('点击遮罩关闭的对话框', { closeOnMaskClick: true })}>
            参数：内容、自定义
          </Button>
          <Button block onClick={() => Modal.alert('提示', '点击遮罩关闭的对话框', { closeOnMaskClick: true })}>
            参数：标题、内容、自定义
          </Button>
        </Space>
      </DemoBlock>

      <DemoBlock title='Modal.confirm'>
        <Space direction='vertical' block>
          <Button block onClick={() => Modal.confirm('人在天边月上明')}>
            参数：内容
          </Button>
          <Button block onClick={() => Modal.confirm('提示', '人在天边月上明')}>
            参数：标题、内容
          </Button>
          <Button block onClick={() => Modal.confirm('点击遮罩关闭的对话框', { closeOnMaskClick: true })}>
            参数：内容、自定义
          </Button>
          <Button block onClick={() => Modal.confirm('提示', '点击遮罩关闭的对话框', { closeOnMaskClick: true })}>
            参数：标题、内容、自定义
          </Button>
        </Space>
      </DemoBlock>
    </ScrollPage>
  );
};
