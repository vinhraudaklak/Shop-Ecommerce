import styles from './BannerButton.module.scss';
import classNames from 'classnames/bind';
import images from '~/assets/images';

const cx = classNames.bind(styles);

const BannerButton = () => {
    return (
        <div
            className={cx('wrap')}
            style={{
                background: `url(${images.BannerBottom}) no-repeat center`,
                backgroundSize: 'cover',
            }}
        ></div>
    );
};

export default BannerButton;
