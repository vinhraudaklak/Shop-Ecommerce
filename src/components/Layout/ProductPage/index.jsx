import React from 'react';
import styles from './ProductPage.module.scss';
import classNames from 'classnames/bind';
import Header from '~/components/Layout/components/Header';
import Footer from '../components/Footer';
import Breadcrumb from './Breadcrumb';
import MainContent from './MainContent'

const cx = classNames.bind(styles);

const ProductPage = () => {
    return (
        <div className={cx('wrapper')}>
            <Header></Header>
            <Breadcrumb></Breadcrumb>
            <MainContent></MainContent>
            <Footer></Footer>
        </div>
    );
};

export default ProductPage;
