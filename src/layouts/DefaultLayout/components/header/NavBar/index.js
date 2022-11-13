import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import styles from './NavBar.module.scss';

const cx = classNames.bind(styles);

var navBarItem = [
    {
        title: 'TRANG CHỦ',
        href: '/',
        viewMore: false
    },
    {
        title: 'HÀNG MỚI',
        href: '/new-products',
        viewMore: false
    },
    {
        title: 'SẢN PHẨM',
        href: '/products',
        viewMore: true
    },
    {
        title: 'BÁN CHẠY',
        href: '/selling',
        viewMore: false
    },
    {
        title: 'SALE',
        href: '/sale',
        viewMore: true
    },
    {
        title: 'BLOG',
        href: '/blog',
        viewMore: false
    },
    {
        title: 'LIÊN HỆ',
        href: '/contact',
        viewMore: false
    }
];

function handleRender(item) {
    if (item.viewMore) {
        return (
            <FontAwesomeIcon
                className={cx('nav__item__icon')}
                icon={faChevronDown}
            />
        );
    } else {
        return undefined;
    }
}

function handleViewMore(item) {
    if (item.viewMore) {
        return () => {};
    }
}

function NavBar() {
    return (
        <div className={cx('wrapper')}>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <ul className={cx('nav__list')}>
                            {navBarItem.map((item, index) => {
                                return (
                                    <li key={index} className={cx('nav__item')}>
                                        <a
                                            href={item.href}
                                            className={cx('nav__link')}
                                        >
                                            <div>{item.title}</div>
                                            {handleRender(item)}
                                        </a>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NavBar;
