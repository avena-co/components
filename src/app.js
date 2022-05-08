import React from 'react';

// components
import {
    Col,
    Input,
    Row
} from 'components';

// styles
import styles from './app.module.scss';

const App = () => {
    return (
        <div className={styles.app}>
            <Row>
                <Col xs={24} md={12}>
                    <Input label='Input 1' />
                </Col>
                <Col xs={24} md={12}>
                    <Input label='Input 2' />
                </Col>
            </Row>
        </div>
    );
};

export default App;
