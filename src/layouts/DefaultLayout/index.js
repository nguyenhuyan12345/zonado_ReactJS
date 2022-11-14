import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss';

import { Header } from './components';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    return (
        <div>
            <Header />
            <div>{children}</div>
        </div>
    );
}

export default DefaultLayout;
