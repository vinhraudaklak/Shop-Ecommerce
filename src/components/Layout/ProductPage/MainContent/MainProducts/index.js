import React from 'react';
import styles from './MainProducts.module.scss';
import classNames from 'classnames/bind';
import images from '~/assets/images';
import Product from '~/components/Layout/components/Product/Product';

const cx = classNames.bind(styles);

const products = [
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
    {
        id: 5,
        img: images.Iphone14pro,
        price: '$1499',
        description: 'Apple iPhone 14 Pro 512GB Gold (MQ233)',
    },
    {
        id: 6,
        img: images.IphoneGold,
        price: '$1437',
        description: 'Apple iPhone 14 Pro 512GB Gold (MQ233)',
    },
    {
        id: 7,
        img: images.Earphone,
        price: '$549',
        description: 'AirPods Max Silver',
    },
    {
        id: 8,
        img: images.AppleWatch,
        price: '$399',
        description: 'Apple Watch Series 9 GPS 41mm Starlight Aluminium Case',
    },
    {
        id: 9,
        img: images.Iphone14pro,
        price: '$1499',
        description: 'Apple iPhone 14 Pro 512GB Gold (MQ233)',
    },
];

const MainProduct = () => {
    return (
        <>
            <div className={cx('wrap')}>
                {products.map((item) => (
                    <Product
                        key={item.id}
                        favoriteProduct={images.favoriteProduct}
                        thumbnail={item.img}
                        description={item.description}
                        price={item.price}
                    />
                ))}
            </div>
            <div>sdfdsfdsf</div>
        </>
    );
};

export default MainProduct;
