import React from 'react';
import styles from './SideBar.module.scss'
import classNames from 'classnames/bind';

const cx = classNames.bind(styles)

const Sidebar = () => {
  return (
    <div className={cx('wrap')}>Sidebar</div>
  )
}

export default Sidebar