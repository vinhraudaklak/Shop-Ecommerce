import { Link } from 'react-router-dom';
import styles from './BannerTop.module.scss';
import classNames from 'classnames/bind';
import images from '~/assets/images';

const cx = classNames.bind(styles);

const BannerTop = () => {
    return (
        <div className={cx('BannerTop')}>
            <div className={cx('container')}>
                <div className={cx('row')}>
                    <div className={cx('left')}>
                        <h5>Pro.Beyond.</h5>
                        <h2>
                            IPhone 14 <b>Pro</b>{' '}
                        </h2>
                        <p>Created to change everything for the better. For everyone</p>
                        <Link className={cx('btn-default')}>Shop Now</Link>
                    </div>
                    <div className={cx('right')}>
                        <img src={images.phoneBannerTop} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BannerTop;
