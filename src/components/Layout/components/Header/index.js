import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import images from '~/assets/images';

const cx = classNames.bind(styles);

function Header() {
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
                        <li className={cx('home')}>
                            <a href="/">Home</a>
                        </li>
                        <li className={cx('about')}>
                            <a href="/about">About</a>
                        </li>
                        <li className={cx('contact')}>
                            <a href="/contact">Contact</a>
                        </li>
                        <li className={cx('blog')}>
                            <a href="/blog">Blog</a>
                        </li>
                    </ul>
                    <div className={cx('icons')}>
                        <button>
                            <img className={cx('favorites')} src={images.favorites} alt="" />
                        </button>
                        <button>
                            <img className={cx('cart')} src={images.cart} alt="" />
                        </button>

                        <button>
                            <img className={cx('vector')} src={images.vector} alt="" />
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
