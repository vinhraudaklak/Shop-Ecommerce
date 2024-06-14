import styles from './ProductDiscount.module.scss';
import classNames from 'classnames/bind';
import images from '~/assets/images';
import Product from '../../components/Product/Product';
const cx = classNames.bind(styles);

const itemDiscount = [
    {
        id: 1,
        img: images.IphoneGold,
        price: '$1437',
        description: 'Apple iPhone 14 Pro 512GB Gold (MQ233)',
    },
    {
        id: 2,
        img: images.Earphone,
        price: '$549',
        description: 'AirPods Max Silver',
    },
    {
        id: 3,
        img: images.AppleWatch,
        price: '$399',
        description: 'Apple Watch Series 9 GPS 41mm Starlight Aluminium Case',
    },
    {
        id: 4,
        img: images.Iphone14pro,
        price: '$1499',
        description: 'Apple iPhone 14 Pro 512GB Gold (MQ233)',
    },
];

const ProductDiscount = () => {
    return (
        <div className={cx(['container', 'wrap'])}>
            <div className={cx('discounts')}>Discounts up to -50%</div>
            <div className={cx('products')}>
                {itemDiscount.map((item, i) => (
                    <Product
                        key={item.id}
                        favoriteProduct={images.favoriteProduct}
                        thumbnail={item.img}
                        description={item.description}
                        price={item.price}
                    />
                ))}
            </div>
        </div>
    );
};

export default ProductDiscount;
