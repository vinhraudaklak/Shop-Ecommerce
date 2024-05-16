import styles from './BannerButton.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const BannerButton = () => {
    return <div className={cx('test')}>BannerButton</div>;
};

export default BannerButton;