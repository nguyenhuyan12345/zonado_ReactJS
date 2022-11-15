import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

import { Container, Row, Col } from 'react-bootstrap';
import classNames from 'classnames/bind';

import styles from './Navbar.module.scss';

const cx = classNames.bind(styles);

function handleRender(item) {
    if (item.viewMore) {
        return <FontAwesomeIcon className={cx('navBarItemIcon')} icon={faChevronDown} />;
    } else {
        return undefined;
    }
}

function Navbar({ navBarItem }) {
    return (
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
    );
}

export default Navbar;
