import Topbar from './Topbar';
import Searchbar from './Searchbar';
import Navbar from './Navbar';
import classNames from 'classnames/bind';

import styles from './Header.module.scss';

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

function Header() {
    return (
        <>
            <Topbar />
            <Searchbar />
            <Navbar navBarItem={navBarItem} />
        </>
    );
}

export default Header;
