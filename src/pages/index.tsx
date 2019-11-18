import React from 'react';
// @ts-ignore
import styles from './index.less';
import { formatMessage } from 'umi-plugin-locale';
import Link from 'umi/link';

export default function() {
  return (
    <div className={styles.normal}>
      <div className={styles.welcome} />
      <ul className={styles.list}>
        <li>
          <Link to="/users">go to /users</Link>
        </li>
        <li>
          <a href="https://umijs.org/guide/getting-started.html">
            {formatMessage({ id: 'index.start' })}
          </a>
        </li>
      </ul>
    </div>
  );
}
