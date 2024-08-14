import React from 'react';
import styles from './Breadcrumb.module.scss';
import classNames from 'classnames/bind';
import images from '~/assets/images';

const cx = classNames.bind(styles);

const Breadcrumb = () => {
    return (
        <div className={cx('container')}>
            <div className={cx('wrap')}>
                <a className={cx('active')} href="">Home</a>
                <img src={images.Arrow} alt="" />
                <a href="">Catalog</a>
                <img src={images.Arrow} alt="" />
                <a href="">Smartphones</a>
            </div>
        </div>
    );
};

export default Breadcrumb;
