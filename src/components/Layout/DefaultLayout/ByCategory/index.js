import styles from './ByCategoty.scss';
import classNames from 'classnames/bind';
import images from '~/assets/images';

const cx = classNames.bind(styles);

const ByCategory = () => {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('container-row')}>
                    <div className={cx('top-row')}>
                        <h5>Browse By Category</h5>
                        <div className={cx('arrow-row')}>
                            <div className={cx('arrow-left')}>
                                <img src={images.ArrowLeft} alt="" />
                            </div>
                            <div className={cx('arrow-right')}>
                                <img src={images.ArrowRight} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className={cx('categories-row')}>
                        <div className={cx('item')}>
                            <img src={images.Cameras} alt="" />
                            <h3>Phones</h3>
                        </div>
                        <div className={cx('item')}>
                            <img src={images.Computers} alt="" />
                            <h3>Smart Watches</h3>
                        </div>
                        <div className={cx('item')}>
                            <img src={images.Gaming} alt="" />
                            <h3>Cameras</h3>
                        </div>
                        <div className={cx('item')}>
                            <img src={images.Headphones} alt="" />
                            <h3>Headphones</h3>
                        </div>
                        <div className={cx('item')}>
                            <img src={images.Phones} alt="" />
                            <h3>Computers</h3>
                        </div>
                        <div className={cx('item')}>
                            <img src={images.SmartWatches} alt="" />
                            <h3>Gaming</h3>
                        </div>
                    </div>
                </div>
            </div>
            ;
        </div>
    );
};

export default ByCategory;
