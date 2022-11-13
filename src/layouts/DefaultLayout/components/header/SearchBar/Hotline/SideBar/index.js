import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './SideBar.module.scss';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function SideBar({ visibleSideBar, setVisibleSideBar }) {
    return (
        <div
            className={cx(
                'side-bar',
                { transSidebar: !visibleSideBar },
                { show: visibleSideBar }
            )}
        >
            <h3 className={cx('title')}>GIỎ HÀNG</h3>
            <div
                className={cx('btn__close')}
                onClick={() => {
                    setVisibleSideBar(false);
                }}
            >
                <FontAwesomeIcon className={cx('btn__icon')} icon={faXmark} />
            </div>
            <div
                className={cx('modal', { hidden: !visibleSideBar })}
                onClick={() => {
                    setVisibleSideBar(false);
                }}
            ></div>
        </div>
    );
}

export default SideBar;
