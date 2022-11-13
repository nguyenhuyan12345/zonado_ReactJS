import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faCartShopping, faBars } from '@fortawesome/free-solid-svg-icons';

import classNames from 'classnames/bind';
import styles from './SearchBar.module.scss';

const cx = classNames.bind(styles);

function SearchBar() {
    return (
        <div className={cx('wrapper')}>
            <div className="container">
                <div className="row">
                    {/* Logo */}
                    <div className="col-lg-3 col-sm-4 col-6">
                        <a className={cx('logo')} href="/">
                            <img className={cx('image')} src="https://theme.hstatic.net/200000163831/1000713867/14/logo.png?v=119" alt="" />
                        </a>
                    </div>

                    {/* Search */}
                    <div className="col-lg-6 d-none d-lg-block">
                        <div className={cx('search')}>
                            <input type="text" className={cx('search__input')} placeholder="Tìm kiếm sản phẩm" />
                            <a className={cx('search__btn')}>
                                <FontAwesomeIcon className={cx('search__icon')} icon={faMagnifyingGlass} />
                                <span className={cx('search__label')}>Tìm kiếm</span>
                            </a>
                        </div>
                    </div>

                    {/* Hotline */}
                    <div className="col-lg-3 col-sm-8 col-6">
                        <div className={cx('hotline')}>
                            <a href="/login" className={`d-none d-lg-block ${cx('hotline__item')}`}>
                                Đăng nhập
                            </a>
                            <span className={`d-none d-lg-block ${cx('hotline__item')}`}>/</span>

                            <a href="/register" className={`d-none d-lg-block ${cx('hotline__item')}`}>
                                Đăng kí
                            </a>

                            <a href="/search" className={`d-lg-none ${cx('hotline__item', 'hotline__search')}`}>
                                <FontAwesomeIcon className={cx('search__icon')} icon={faMagnifyingGlass} />
                            </a>

                            <button className={cx('hotline__item', 'hotline__cart')}>
                                <FontAwesomeIcon icon={faCartShopping} />
                            </button>

                            <button className={`d-lg-none ${cx('hotline__item', 'hotline__menu')}`}>
                                <FontAwesomeIcon icon={faBars} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SearchBar;
