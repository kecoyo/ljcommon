import React, { useState, useEffect } from 'react';
import { Button } from 'antd';
import Lottie from 'react-lottie';
import styles from './index.local.less';

export default (props: { isWidthScreen: boolean }) => {
  const [startFireAnimation, setStartFireAnimation] = useState(false);
  const [startResultAnimation, setStartResultAnimation] = useState(false);
  const { isWidthScreen } = props;

  useEffect(() => {
    document
      .querySelector('#calendarImage')
      ?.addEventListener('mouseenter', () => {
        setStartFireAnimation(true);
      });
    document
      .querySelector('#resultImage')
      ?.addEventListener('mouseenter', () => {
        setStartResultAnimation(true);
      });
  }, []);

  return (
    <div className={styles.mainSectionContainer}>
      <div>
        <div className={styles.mainSectionTitle}>LJCommon</div>
        <div className={styles.mainSectionDescription}>
          {'探索移动端 Web 的体验极限'}
        </div>
        <div className={styles.mainSectionButtonAction}>
          <Button
            shape='round'
            className={styles.buttonLeft}
            href={'/guide/quick-start'}
          >
            {'开始使用'}
          </Button>
          <Button
            shape='round'
            className={styles.buttonRight}
            href={'/components'}
          >
            {'在线体验'}
          </Button>
        </div>
      </div>
      <div className={styles.imageContainer}>
        <div
          className={styles.calendarImage}
          id='calendarImage'
          style={{
            backgroundImage:
              'url(https://gw.alipayobjects.com/zos/bmw-prod/db18b4de-20f5-403e-9075-a413518934e3.svg)',
          }}
        >
          <div className={styles.publishDayAnimation}>
            <Lottie
              options={{
                loop: false,
                autoplay: false,
                path: 'https://gw.alipayobjects.com/os/finxbff/lolita/a31c67dd-ac41-4ca6-a92b-3e459e2035af/lottie.json',
              }}
              eventListeners={[
                {
                  eventName: 'complete',
                  callback: () => {
                    setStartFireAnimation(false);
                  },
                },
              ]}
              height={startFireAnimation ? (isWidthScreen ? 280 : 172) : 0}
              width={startFireAnimation ? (isWidthScreen ? 280 : 172) : 0}
              isStopped={!startFireAnimation}
              style={{ pointerEvents: 'none' }}
            />
          </div>
        </div>
        <div className={styles.resultImage} id='resultImage'>
          <Lottie
            options={{
              loop: false,
              autoplay: false,
              path: 'https://gw.alipayobjects.com/os/finxbff/lolita/01548f7e-9c13-4110-8023-f664ef4736c4/lottie.json',
            }}
            eventListeners={[
              {
                eventName: 'complete',
                callback: () => {
                  setStartResultAnimation(false);
                },
              },
            ]}
            height={isWidthScreen ? 117 : 70}
            width={isWidthScreen ? 94 : 56}
            // isStopped={!startResultAnimation}
            isStopped
            style={{ pointerEvents: 'none' }}
          />
        </div>
        <img
          className={styles.staticImage}
          src={
            isWidthScreen
              ? 'https://gw.alipayobjects.com/mdn/rms_226d75/afts/img/A*kQ_zRK8YuGoAAAAAAAAAAAAAARQnAQ'
              : 'https://gw.alipayobjects.com/mdn/rms_226d75/afts/img/A*v4isTYsMCNcAAAAAAAAAAAAAARQnAQ'
          }
        ></img>
      </div>
    </div>
  );
};
