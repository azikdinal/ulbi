import React, {Suspense} from 'react';
import {Link, Route, Routes} from 'react-router-dom';

import {useTheme} from "app/providers/ThemeProvider";
import {classNames} from "shared/classNames";
import {AppRouter} from "app/providers/router";

import './styles/index.scss'

const App = () => {
    const {theme, toggleTheme} = useTheme()

    return (
        <div className={classNames("app", {}, [theme, 'cls1', 'cls2'])}>
            <button onClick={toggleTheme}>TOGGLE</button>
            <Link to='/'>Главная</Link>
            <Link to='/about'>О нас</Link>
            <AppRouter/>
        </div>
    );
};

export default App;