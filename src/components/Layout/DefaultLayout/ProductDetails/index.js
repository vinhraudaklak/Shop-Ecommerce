import styles from  './ProductDetails.module.scss'
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const ProductDetails = () => {
  return (
    <div className={cx('test')}>ProductDetails</div>
  )
}

export default ProductDetails