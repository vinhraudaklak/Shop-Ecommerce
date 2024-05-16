import styles from './MainBanner.module.scss';
import classNames from 'classnames/bind';
import images from '~/assets/images';
import BannerTop from '../MainBanner/BannerTop';
import BannerButton from '../MainBanner/BannerButton';

const cx = classNames.bind(styles);

const MainBanner = () => {
    return (
        <div className={cx('wrap')}>
            <BannerTop />
            <BannerButton />
        </div>
    );
};

export default MainBanner;
