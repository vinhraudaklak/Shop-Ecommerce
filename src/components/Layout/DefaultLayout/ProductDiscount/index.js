import styles from './ProductDiscount.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const ProductDiscount = () => {
    return <div className={cx('test')}>ProductDiscount</div>;
};

export default ProductDiscount;
