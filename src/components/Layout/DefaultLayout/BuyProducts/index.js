import styles from './BuyProducts.module.scss';
import classNames from 'classnames/bind';
import images from '~/assets/images';
const cx = classNames.bind(styles);

const BuyProduct = () => {
    return (
        <div className={cx('container', 'container-wrap')}>
            <ul className={cx('wrap')}>
                <li className={cx('item', 'active')}>New Arrival</li>
                <li className={cx('item')}>Bestseller</li>
                <li className={cx('item')}>Featured Products</li>
            </ul>

            <div className={cx('wrap__products-item')}>
                <div className={cx('product-item')}>
                    <div className={cx('product-favorite')}>
                        <img src={images.favoriteProduct} alt="" />
                    </div>
                    <div className={cx('product-information')}>
                        <img src={images.Iphone14pro} alt="" />
                        <p>Apple iPhone 14 Pro Max 128GB Deep Purple (MQ9T3RX/A)</p>
                        <span>$900</span>
                        <div className={cx('btn')}>
                            <button className={cx('btn-default')}>Buy Now</button>
                        </div>
                    </div>
                </div>
                <div className={cx('product-item')}>
                    <div className={cx('product-favorite')}>
                        <img src={images.favoriteProduct} alt="" />
                    </div>
                    <div className={cx('product-information')}>
                        <img src={images.Iphone14pro} alt="" />
                        <p>Apple iPhone 14 Pro Max 128GB Deep Purple (MQ9T3RX/A)</p>
                        <span>$900</span>
                        <div className={cx('btn')}>
                            <button className={cx('btn-default')}>Buy Now</button>
                        </div>
                    </div>
                </div>
                <div className={cx('product-item')}>
                    <div className={cx('product-favorite')}>
                        <img src={images.favoriteProduct} alt="" />
                    </div>
                    <div className={cx('product-information')}>
                        <img src={images.Iphone14pro} alt="" />
                        <p>Apple iPhone 14 Pro Max 128GB Deep Purple (MQ9T3RX/A)</p>
                        <span>$900</span>
                        <div className={cx('btn')}>
                            <button className={cx('btn-default')}>Buy Now</button>
                        </div>
                    </div>
                </div>
                <div className={cx('product-item')}>
                    <div className={cx('product-favorite')}>
                        <img src={images.favoriteProduct} alt="" />
                    </div>
                    <div className={cx('product-information')}>
                        <img src={images.Iphone14pro} alt="" />
                        <p>Apple iPhone 14 Pro Max 128GB Deep Purple (MQ9T3RX/A)</p>
                        <span>$900</span>
                        <div className={cx('btn')}>
                            <button className={cx('btn-default')}>Buy Now</button>
                        </div>
                    </div>
                </div>
                <div className={cx('product-item')}>
                    <div className={cx('product-favorite')}>
                        <img src={images.favoriteProduct} alt="" />
                    </div>
                    <div className={cx('product-information')}>
                        <img src={images.Iphone14pro} alt="" />
                        <p>Apple iPhone 14 Pro Max 128GB Deep Purple (MQ9T3RX/A)</p>
                        <span>$900</span>
                        <div className={cx('btn')}>
                            <button className={cx('btn-default')}>Buy Now</button>
                        </div>
                    </div>
                </div>
                <div className={cx('product-item')}>
                    <div className={cx('product-favorite')}>
                        <img src={images.favoriteProduct} alt="" />
                    </div>
                    <div className={cx('product-information')}>
                        <img src={images.Iphone14pro} alt="" />
                        <p>Apple iPhone 14 Pro Max 128GB Deep Purple (MQ9T3RX/A)</p>
                        <span>$900</span>
                        <div className={cx('btn')}>
                            <button className={cx('btn-default')}>Buy Now</button>
                        </div>
                    </div>
                </div>
                <div className={cx('product-item')}>
                    <div className={cx('product-favorite')}>
                        <img src={images.favoriteProduct} alt="" />
                    </div>
                    <div className={cx('product-information')}>
                        <img src={images.Iphone14pro} alt="" />
                        <p>Apple iPhone 14 Pro Max 128GB Deep Purple (MQ9T3RX/A)</p>
                        <span>$900</span>
                        <div className={cx('btn')}>
                            <button className={cx('btn-default')}>Buy Now</button>
                        </div>
                    </div>
                </div><div className={cx('product-item')}>
                    <div className={cx('product-favorite')}>
                        <img src={images.favoriteProduct} alt="" />
                    </div>
                    <div className={cx('product-information')}>
                        <img src={images.Iphone14pro} alt="" />
                        <p>Apple iPhone 14 Pro Max 128GB Deep Purple (MQ9T3RX/A)</p>
                        <span>$900</span>
                        <div className={cx('btn')}>
                            <button className={cx('btn-default')}>Buy Now</button>
                        </div>
                    </div>
                </div>  
            </div>
        </div>
    );
};

export default BuyProduct;
