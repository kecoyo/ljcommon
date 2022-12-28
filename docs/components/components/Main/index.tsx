import React, { useEffect, useState, useRef } from 'react';
import { Button, Card } from 'antd';
import Lottie from 'react-lottie';
import { useSize } from 'ahooks';
import { RightOutlined } from '@ant-design/icons';
import MainSection from './MainSection';
import {
  productIntroduce,
  productIntroduceEn,
  getProductResource,
  productDesignValues,
  productDesignValuesEn,
  getProductDesignValuesBackgroundImage,
  getGuides,
  getRecommends,
  users,
} from './config';
import styles from './index.local.less';

export default () => {
  const [isWidthScreen, setIsWidthScreen] = useState(true);
  const [startAnimation, setStartAnimation] = useState([false, false, false, false]);

  useEffect(() => {
    setIsWidthScreen(screen?.width > 450);
    /** 绑定触发动画的事件，因为是mouseenter触发，因此无法进行通过事件委托绑定 */
    startAnimation.forEach((item, index) => {
      document.querySelector(`#my_lottie_${index}`)?.addEventListener('mouseenter', () => {
        setStartAnimation(pre => pre.map((i, idx) => (index === idx ? true : i)));
      });
    });
  }, []);

  const containerRef = useRef<HTMLDivElement>(null);
  const containerSize = useSize(containerRef);

  useEffect(() => {
    if (!containerSize?.width) return;

    if (containerSize?.width > 450) {
      setIsWidthScreen(true);
    } else {
      setIsWidthScreen(false);
    }
  }, [containerSize?.width]);

  return (
    <div className={styles.mainContainer} ref={containerRef} id='mainContainer'>
      <div className={styles.mainSection}>
        <MainSection isWidthScreen={isWidthScreen} />
      </div>
      <div className={styles.contentSection}>
        {/* 设计语言与开发资源 */}
        <div className={styles.productResource}>
          <div className={styles.productResourceTitle}>{'语言设计与开发资源'}</div>
          <div className={styles.productResourceContent}>
            {getProductResource(isWidthScreen).map(resource => (
              <Card
                className={styles.productResourceCard}
                bordered={false}
                style={{
                  backgroundImage: `url(${resource.backgroundImage})`,
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'cover',
                }}
                key={resource.title}
              >
                <div className={styles.productResourceCardContent}>
                  <div className={styles.productResourceCardTitle}>{resource.title}</div>
                  <div className={styles.productResourceCardDescription}>{resource.description}</div>
                  <Button
                    className={styles.productResourceCardButton}
                    type='primary'
                    shape='round'
                    target={resource.target}
                    href={resource.buttonLink}
                  >
                    {resource.buttonText}
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
        {/* 新手指引 */}
        <div className={styles.guides}>
          <div className={styles.guidesTitle}>{'新手指引'}</div>
          <div className={styles.guidesContent}>
            {getGuides(isWidthScreen).map(guide => (
              <Card
                className={styles.guideCard}
                bordered={false}
                style={{
                  backgroundImage: `url(${guide.backgroundImage})`,
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'cover',
                }}
                key={guide.title}
              >
                <div className={styles.guideCardContent}>
                  <div className={styles.guideCardTitle}>{guide.title}</div>
                  <div className={styles.guideCardDescription}>{guide.description}</div>
                  <div className={styles.guideCardButton}>
                    <a href={guide.buttonLink}>
                      {guide.buttonText}
                      <RightOutlined />
                    </a>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
