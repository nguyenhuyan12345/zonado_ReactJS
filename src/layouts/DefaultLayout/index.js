import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss';

import { TopBar, NavBar, SearchBar } from './components/header';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    return (
        <div>
            <TopBar />
            <SearchBar />
            {/* <NavBar /> */}
            <div>{children}</div>
        </div>
    );
}

export default DefaultLayout;
