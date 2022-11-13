import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

import classNames from 'classnames/bind';
import styles from './Hotline.module.scss';

import SideBar from './SideBar';

const cx = classNames.bind(styles);

function Hotline() {
    const [visibleSideBar, setVisibleSideBar] = useState(false);
    return (
        <div className={cx('wrapper')}>
            <a href="/login" className={cx('item')}>
                Đăng nhập
            </a>
            <span className={cx('item')}>/</span>
            <a href="/register" className={cx('item')}>
                Đăng kí
            </a>
            <a
                className={cx('item', 'cart')}
                onClick={() => {
                    setVisibleSideBar(true);
                }}
            >
                <FontAwesomeIcon icon={faCartShopping} />
            </a>
            <SideBar
                visibleSideBar={visibleSideBar}
                setVisibleSideBar={setVisibleSideBar}
            />
        </div>
    );
}

export default Hotline;
