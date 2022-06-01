import React, { Suspense, lazy } from 'react';

import { Route, Routes } from 'react-router-dom';

// pages
const Select = lazy(() => import('pages/select'));
const Button = lazy(() => import('pages/button'));

// styles
import styles from './app.module.scss';

const App = () => {
    return (
        <div className={styles.app}>
            <Suspense fallback={<div />}>
                <Routes>
                    <Route path='/button' element={<Button />} />
                    <Route path='/select' element={<Select />} />
                </Routes>
            </Suspense>
        </div>
    );
};

export default App;
