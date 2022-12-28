import React from 'react';
import { Button, Space, Toast, Event, Page } from 'ljcommon';
import { DemoBlock } from 'demos';

import styles from './demo1.less';

const handleEvent = () => {
  Toast.show('触发了事件：event1');
};

// 基础用法
function AddListener() {
  const handleClick = () => {
    Event.addListener('event1', handleEvent);
    Toast.show('添加事件：event1');
  };

  return (
    <>
      <Button onClick={handleClick}>addListener</Button>
    </>
  );
}

function Emit() {
  const handleClick = () => {
    Event.emit('event1');
  };

  return (
    <>
      <Button onClick={handleClick}>emit</Button>
    </>
  );
}

function RemoveListener() {
  const handleClick = () => {
    Event.removeListener('event1', handleEvent);
    Toast.show('移除事件：event1');
  };

  return (
    <>
      <Button onClick={handleClick}>removeListener</Button>
    </>
  );
}

function RemoveAllListener() {
  const handleClick = () => {
    Event.removeAllListeners('event1');
    Toast.show('移除所有event1事件');
  };

  return (
    <>
      <Button onClick={handleClick}>removeAllListeners</Button>
    </>
  );
}

// 事件状态
function EventNames() {
  const handleClick = () => {
    const eventNames = Event.eventNames();
    Toast.show(JSON.stringify(eventNames));
  };
  return (
    <>
      <Button onClick={handleClick}>eventNames</Button>
    </>
  );
}

function ListenerCount() {
  const handleClick = () => {
    const listenerCount = Event.listenerCount('event1');
    Toast.show(JSON.stringify(listenerCount));
  };
  return (
    <>
      <Button onClick={handleClick}>listenerCount</Button>
    </>
  );
}

function Listeners() {
  const handleClick = () => {
    const listeners = Event.listeners('event1');
    Toast.show(JSON.stringify(listeners));
  };
  return (
    <>
      <Button onClick={handleClick}>listeners</Button>
    </>
  );
}

// 打开/关闭调试
function OpenDebug() {
  const handleClick = () => {
    Toast.show('打开调试');
    Event.setDebug(true);
  };
  return (
    <>
      <Button onClick={handleClick}>打开调试</Button>
    </>
  );
}
function CloseDebug() {
  const handleClick = () => {
    Toast.show('关闭调试');
    Event.setDebug(false);
  };
  return (
    <>
      <Button onClick={handleClick}>关闭调试</Button>
    </>
  );
}

export default () => {
  return (
    <Page title='基础用法'>
      <DemoBlock title='基础用法'>
        <Space wrap>
          <AddListener />
          <Emit />
          <RemoveListener />
          <RemoveAllListener />
        </Space>
      </DemoBlock>

      <DemoBlock title='事件状态'>
        <Space wrap>
          <EventNames />
          <ListenerCount />
          <Listeners />
        </Space>
      </DemoBlock>

      <DemoBlock title='打开/关闭调试'>
        <Space wrap>
          <OpenDebug />
          <CloseDebug />
        </Space>
      </DemoBlock>
    </Page>
  );
};
