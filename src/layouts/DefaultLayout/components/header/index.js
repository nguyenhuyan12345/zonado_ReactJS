import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruck, faSackXmark, faMagnifyingGlass, faCartShopping, faBars, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { Container, Row, Col, Button, Offcanvas } from 'react-bootstrap';
import classNames from 'classnames/bind';

import styles from './Header.module.scss';
import { useState } from 'react';

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
        return <FontAwesomeIcon className={cx('navBarItemIcon')} icon={faChevronDown} />;
    } else {
        return undefined;
    }
}

function Header() {
    const [showSidebar, setShowSidebar] = useState(false);
    const [showMenubar, setShowMenuBar] = useState(false);

    const handleCloseSidebar = () => setShowSidebar(false);
    const handleShowSidebar = () => setShowSidebar(true);

    const handleCloseMenuBar = () => setShowMenuBar(false);
    const handleShowMenuBar = () => setShowMenuBar(true);

    return (
        <Container fluid style={{ padding: '0' }}>
            {/* Topbar */}
            <Container fluid className={`d-none d-md-flex ${cx('topBar')}`}>
                <Container>
                    <Row>
                        <Col xs md={4} className={cx('topBarLeft')}>
                            <marquee className={cx('marquee')} behavior="" direction="">
                                FREE SHIP đơn từ 399K
                            </marquee>
                        </Col>
                        <Col xs md={8} className={cx('topBarRight')}>
                            <a href="/" className={cx('zocoin')}>
                                <FontAwesomeIcon className={cx('topBarRightIcon')} icon={faSackXmark} />
                                Zocoin
                            </a>
                            <a href="/" className={cx('checkOrder')}>
                                <FontAwesomeIcon className={cx('topBarRightIcon')} icon={faTruck} />
                                Kiểm tra đơn hàng
                            </a>
                        </Col>
                    </Row>
                </Container>
            </Container>

            {/* Search */}
            <Container fluid="md" className={cx('searchBar')}>
                <Row>
                    {/* Logo */}
                    <Col xs lg={3}>
                        <a className={cx('logo')} href="/">
                            <img className={cx('image')} src="https://theme.hstatic.net/200000163831/1000713867/14/logo.png?v=119" alt="" />
                        </a>
                    </Col>
                    {/* Search input */}
                    <Col xs lg={6} className="d-none d-lg-block">
                        <div className={cx('search')}>
                            <input type="text" className={cx('searchInput')} placeholder="Tìm kiếm sản phẩm" />
                            <a className={cx('searchBtn')}>
                                <FontAwesomeIcon className={cx('searchIcon')} icon={faMagnifyingGlass} />
                                <span className={cx('searchLabel')}>Tìm kiếm</span>
                            </a>
                        </div>
                    </Col>
                    {/* Hotline */}
                    <Col xs lg={3}>
                        <div className={cx('hotline')}>
                            <a href="/login" className={`d-none d-lg-block ${cx('hotlineItem')}`}>
                                Đăng nhập
                            </a>
                            <span className={`d-none d-lg-block ${cx('hotlineItem')}`}>/</span>

                            <a href="/register" className={`d-none d-lg-block ${cx('hotlineItem')}`}>
                                Đăng kí
                            </a>

                            <a href="/search" className={`d-lg-none ${cx('hotlineItem', 'hotlineSearch')}`}>
                                <FontAwesomeIcon className={cx('searchIcon')} icon={faMagnifyingGlass} />
                            </a>

                            {/* Card sidebar */}
                            <button className={` ${cx('hotlineItem', 'hotlineCard')}`} onClick={handleShowSidebar}>
                                <FontAwesomeIcon icon={faCartShopping} />
                            </button>

                            {/* Menu sidebar*/}
                            <button className={`d-lg-none ${cx('hotlineItem', 'hotlineMenu')}`} onClick={handleShowMenuBar}>
                                <FontAwesomeIcon icon={faBars} />
                            </button>
                        </div>
                    </Col>
                </Row>
            </Container>

            {/* Navbar */}
            <Container>
                <Row>
                    <Col xs className={`d-none d-lg-flex ${cx('navBar')}`}>
                        {navBarItem.map((item, index) => {
                            return (
                                <button key={index} className={cx('navBarItem')}>
                                    <a href={item.href} className={cx('navBarLink')}>
                                        <div>{item.title}</div>
                                        {handleRender(item)}
                                    </a>
                                </button>
                            );
                        })}
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}

export default Header;
