import styles from './BannerButton.module.scss';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import images from '~/assets/images';

const cx = classNames.bind(styles);

const BannerButton = () => {
    return (
        <div className={cx('row')}>
            <div className={cx('right')}>
                <div className={cx('rightTop')}>
                    <img src={images.BannerButtonLeft} alt="" />
                    <div className={cx('rightTop-content')}>
                        <h3>Playstation 5</h3>
                        <p>
                            Incredibly powerful CPUs, GPUs, and an SSD with <br></br>integrated I/O will redefine your
                            PlayStation experience.
                        </p>
                    </div>
                </div>
                <div className={cx('rowRightButton')}>
                    <div className={cx('rightButton-left')}>
                        <div>
                            <img src={images.BannerButtonEarphoneLeft} alt="" />
                        </div>
                        <div className={cx('rightButton-leftContent')}>
                            <h3>Apple</h3>
                            <h3>
                                AirPods <b>Max</b>
                            </h3>
                            <p>Computational audio. <br /> Listen, it's powerful</p>
                        </div>
                    </div>
                    <div className={cx('rightButton-right')}>
                        <div>
                            <img src={images.BannerButtonEarphoneRight} alt="" />
                        </div>
                        <div className={cx('rightButton-rightContent')}>
                            <h3>Apple</h3>
                            <h3>
                                Vision <b>Pro</b>
                            </h3>
                            <p>An immersive way to <br /> experience entertainment</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={cx('BannerButton-Left')}>
                <div className={cx('BannerButton-LeftLeft')}>
                    <h2>Macbook <b>Air</b></h2>
                    <p>The new 15‑inch MacBook Air makes room for more of what <br /> you love with a spacious Liquid Retina display</p>
                    <Link className={cx('btn-default')} >Shop Now</Link>
                </div>
                <div className={cx('left-left')}>
                    <img src={images.BannerButtonRight} alt="" />
                </div>
            </div>
        </div>
    );
};

export default BannerButton;
