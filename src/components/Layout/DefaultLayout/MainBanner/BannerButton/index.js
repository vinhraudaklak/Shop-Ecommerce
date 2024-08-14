import styles from './BannerButton.module.scss';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import images from '~/assets/images';

const cx = classNames.bind(styles);

const BannerButton = () => {
    return (
        <div className={cx('banner-bottom')}>
            <div className={cx('banner-item')}z>
                <div className={cx('banner-item-left')}>
                    <img src={images.BannerButtonRight} alt="" />
                </div>
                <div className={cx('banner-item-right')}>
                    <h3 className={cx('title')}>
                        Macbook <b>Air</b>
                    </h3>
                    <p className={cx('short-content')}>
                        The new 15‑inch MacBook Air makes room for more of what you love with a spacious Liquid Retina
                        display.
                    </p>
                    <Link>
                        <button className={cx('btn-default', 'btn-shop-now')}>Shop Now</button>
                    </Link>
                </div>
            </div>
            <div className={cx('banner-item')}>
                <div className={cx('banner-item-left')}>
                    <img src={images.BannerButtonLeft} alt="" />
                </div>
                <div className={cx('banner-item-right')}>
                    <h3 className={cx('title')}>Playstation 5</h3>
                    <p className={cx('short-content')}>
                        Incredibly powerful CPUs, GPUs, and an SSD with <br></br>integrated I/O will redefine your
                        PlayStation experience.
                    </p>
                </div>
            </div>
            <div className={cx('banner-item')}>
                <div className={cx('banner-item-left')}>
                    <img src={images.BannerButtonEarphoneLeft} alt="" />
                </div>
                <div className={cx('banner-item-right')}>
                    <h3 className={cx('title')}>
                        Apple
                        <br /> AirPods <b>Max</b>
                    </h3>
                    <p className={cx('short-content')}>Computational audio. <br></br> Listen, it's powerful</p>
                </div>
            </div>
            <div className={cx('banner-item')}>
                <div className={cx('banner-item-left')}>
                    <img src={images.BannerButtonEarphoneRight} alt="" />
                </div>
                <div className={cx('banner-item-right')}>
                    <h3 className={cx('title')}>
                        Apple Vision
                        <br />
                        <b>Pro</b>
                    </h3>
                    <p className={cx('short-content')}>An immersive way to experience entertainment</p>
                </div>
            </div>
        </div>
    );
};

export default BannerButton;
