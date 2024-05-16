import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';
import styles from './Footer.module.scss';

const cx = classNames.bind(styles);

const Footer = () => {
    return <div className={cx('maau')}>Chân trang</div>;
};

export default Footer;
