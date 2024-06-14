import styles from './Product.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

const Product = ({ favoriteProduct = null, thumbnail = null, description = '', price = 0, link = null }) => {
    return (
        <div className={cx('product')}>
            <div className={cx('favorite')}>
                <img src={favoriteProduct} alt="" />
            </div>
            <div className={cx('product-img')}>
                <img src={thumbnail} alt="" />
            </div>
            <div className={cx('product-description')}>
                <p>{description}</p>
                <div className={cx('price')}>{price}</div>
            </div>
            <div className={cx('btn-buy')}>
                <button className={cx(['btn-default'])}>Buy Now</button>
            </div>
        </div>
    );
};

export default Product;
