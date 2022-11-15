import { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faCartShopping, faBars } from '@fortawesome/free-solid-svg-icons';

import { Container, Row, Col } from 'react-bootstrap';

import classNames from 'classnames/bind';

import styles from './Searchbar.module.scss';

const cx = classNames.bind(styles);

function Searchbar() {
    const [showSidebar, setShowSidebar] = useState(false);
    const [showMenubar, setShowMenuBar] = useState(false);

    const handleCloseSidebar = () => setShowSidebar(false);
    const handleShowSidebar = () => setShowSidebar(true);

    const handleCloseMenuBar = () => setShowMenuBar(false);
    const handleShowMenuBar = () => setShowMenuBar(true);
    return (
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
    );
}

export default Searchbar;
