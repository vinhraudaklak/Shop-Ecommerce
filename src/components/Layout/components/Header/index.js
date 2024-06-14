// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCircleXmark, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import images from '~/assets/images';

const cx = classNames.bind(styles);

function Header() {
    const menu = [
        {
            id: 1,
            name: 'Home',
            slug: 'home',
        },
        {
            id: 2,
            name: 'About',
            slug: 'About',
        },
        {
            id: 3,
            name: 'Blog',
            slug: 'blog',
        },
        {
            id: 4,
            name: 'Contact',
            slug: 'Contact',
        },
    ];

    return (
        <header className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('row')}>
                    <div className={cx('logo')}>
                        <img src={images.logo} alt="" />
                    </div>
                    <form className={cx('search-from')}>
                        <button className={cx('search-button')}>
                            <img src={images.searchIcon} alt="" />
                        </button>
                        <input className={cx('search-input')} placeholder="Tìm Kiếm"></input>
                    </form>
                    <ul className={cx('menu')}>
                        {menu.map((item) => (
                            <li className={cx('menu-item')} key={item.id}>
                                <a href={item.slug}>{item.name}</a>
                            </li>
                        ))}
                    </ul>
                    <div className={cx('icons')}>
                        <button className={cx('icon-item')}>
                            <img src={images.favorites} alt="" />
                        </button>
                        <button className={cx('icon-item')}>
                            <img src={images.cart} alt="" />
                        </button>
                        <button className={cx('icon-item')}>
                            <img src={images.user} alt="" />
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
