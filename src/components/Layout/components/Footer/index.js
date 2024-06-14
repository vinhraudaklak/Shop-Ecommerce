import classNames from 'classnames/bind';
import styles from './Footer.module.scss';
import images from '~/assets/images';

const cx = classNames.bind(styles);

const Footer = () => {
    return (
        <div className={cx('container-fullWidth')}>
            <div className={cx(['container', 'wrap'])}>
                <div className={cx('wrap-link')}>
                    <div className={cx('wrap-item1')}>
                      <div>
                            <img src={images.logoWhite} alt="" />
                            <p>
                                We are a residential interior design firm located in Portland. Our boutique-studio offers
                                more than
                            </p>
                      </div>
                    </div>
                    <div className={cx('wrap-item-shared')}>
                        <h3>Services</h3>
                        <a href="">Bonus program</a>
                        <a href="">Gift cards</a>
                        <a href="">Credit and payment</a>
                        <a href="">Service contracts</a>
                        <a href="">Non-cash account</a>
                        <a href="">Payment</a>
                    </div>
                    <div className={cx('wrap-item-shared')}>
                        <h3>Assistance to the buyer</h3>
                        <a href="">Find an order</a>
                        <a href="">Terms of delivery</a>
                        <a href="">Exchange and return of goods</a>
                        <a href="">Guarantee</a>
                        <a href="">Frequently asked questions</a>
                        <a href="">Terms of use of the site</a>
                    </div>
                </div>
                <div className={cx('wrap-icon')}>
                    <img src={images.Twitter} alt="" />
                    <img src={images.FaceBook} alt="" />
                    <img src={images.Tiktok} alt="" />
                    <img src={images.Instagram} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Footer;
