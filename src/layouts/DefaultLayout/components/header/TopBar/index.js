import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruck, faSackXmark } from '@fortawesome/free-solid-svg-icons';

import classNames from 'classnames/bind';

import styles from './Topbar.module.scss';

const cx = classNames.bind(styles);

function TopBar({ topMessage = 'FREE SHIP đơn từ 399K' }) {
    return (
        <div className={`d-none d-md-block ${cx('wrapper')} `}>
            <div className="container">
                <div className="row">
                    <div className="col-4">
                        <div className={cx('top-left')}>
                            <marquee className={cx('item')} behavior="" direction="">
                                {topMessage}
                            </marquee>
                        </div>
                    </div>

                    <div className="col-8">
                        <div className={cx('top-right')}>
                            <a href="/" className={cx('link')}>
                                <FontAwesomeIcon className={cx('icon')} icon={faSackXmark} />
                                Zocoin
                            </a>
                            <a href="/" className={cx('item')}>
                                <FontAwesomeIcon className={cx('icon')} icon={faTruck} />
                                Kiểm tra đơn hàng
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TopBar;
