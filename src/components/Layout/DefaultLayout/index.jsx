import styles from './DefaultLayout.module.scss';
import classNames from 'classnames/bind';
import Header from '~/components/Layout/components/Header';
import Footer from '~/components/Layout/components/Footer';
import MainBanner from './MainBanner';
import ByCategory from './ByCategory';
import BuyProducts from './BuyProducts';
import ProductDetails from './ProductDetails';
import ProductDiscount from './ProductDiscount';
import BannerButton from './BannerButton';

const cx = classNames.bind(styles);

function DefaultLayout() {
    return (
        <div className={cx('wrapper')}>
            <Header></Header>
            <MainBanner></MainBanner>
            <ByCategory></ByCategory>
            <BuyProducts></BuyProducts>
            <ProductDetails />
            <ProductDiscount />
            <BannerButton />
            <Footer />
        </div>
    );
}

export default DefaultLayout;
