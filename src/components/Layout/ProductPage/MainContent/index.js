import React from 'react';
import styles from './MainContent.module.scss';
import classNames from 'classnames/bind';
import images from '~/assets/images';
import SideBar from './SideBar';
import MainProducts from './MainProducts';

const cx = classNames.bind(styles);

const MainContent = () => {
    return (
        <div className={cx('container')}>
            <div className={cx('wrap')}>
                <div className={cx('sidebar')}>
                    <SideBar></SideBar>
                </div>
                <div className={cx('main')}>
                    <MainProducts></MainProducts>
                </div>
            </div>
        </div>
    );
};

export default MainContent;
