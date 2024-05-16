import styles from './ByCategoty.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const ByCategory = () => {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
               <div className={cx('container-row')}>
                    <div className={cx('top-row')}>
                        <h5>Browse By Category</h5>
                        <div className={cx('arrow-row')}>
                            <div className={cx('arrow-left')}>trai</div>
                            <div className={cx('arrow-right')}>phai</div>
                        </div>
                    </div>
                    <div className={cx('categories-row')}>
                        <div>dsfasdf</div>
                        <div>dsfasdf</div>
                        <div>dsfasdf</div>  
                        
                    </div>
               </div>
            </div>
            ;
        </div>
    );
};

export default ByCategory;
