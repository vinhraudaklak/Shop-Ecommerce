import styles from './ProductDetails.module.scss';
import classNames from 'classnames/bind';
import images from '~/assets/images';

const cx = classNames.bind(styles);

const ProductDetails = () => {
    return (
        <div className={cx(['container-full-width', 'container-wrap'])}>
            <div className={cx('item-information')}>
                <div className={cx('img-product')}>
                   
                    <img src={images.item1} alt=""></img>
                </div>
                <div className={cx('information')}>
                    <h3>Popular Products </h3>
                    <p>
                        iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and
                        ease of use.
                    </p>
                    <button className={cx(['btn-default', 'btn-product-details'])}>Shop Now</button>
                </div>
            </div>
            <div className={cx('item-information')}>
                <img src={images.item2} alt=""></img>
                <div className={cx('information')}>
                    <h3>Ipad Pro </h3>
                    <p>
                        iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and
                        ease of use.
                    </p>
                    <button className={cx(['btn-default', 'btn-product-details'])}>Shop Now</button>
                </div>
            </div>
            <div className={cx('item-information')}>
                <img src={images.item3} alt=""></img>
                <div className={cx('information')}>
                    <h3>Samsung Galaxy</h3>
                    <p>
                        iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and
                        ease of use.
                    </p>
                    <button className={cx(['btn-default', 'btn-product-details'])}>Shop Now</button>
                </div>
            </div>
            <div className={cx('item-information')}>
                <img src={images.item4} alt=""></img>
                <div className={cx('information')}>
                    <h3>Macbook Pro</h3>
                    <p>
                        iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and
                        ease of use.
                    </p>
                    <button className={cx(['btn-default', 'btn-product-details'])}>Shop Now</button>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
