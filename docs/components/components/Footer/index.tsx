import React from 'react';
import styles from './index.local.less';

export default () => {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.copyright}>
        © 2022 Made with ❤ by
        <a className={styles.copyrightLink} href='https://github.com/kecoyo' target='_blank'>
          kecoyo
        </a>
      </div>
    </div>
  );
};
