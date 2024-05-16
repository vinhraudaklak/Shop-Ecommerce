import styles from './BuyProducts.module.scss'
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const BuyProduct = () => {
  return (
    <div className={cx('test')}>BuyProduct</div>
  )
}

export default BuyProduct