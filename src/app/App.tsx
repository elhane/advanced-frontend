import React, {Suspense, useContext} from 'react';
import './styles/index.scss'
import {Link, Route, Routes} from 'react-router-dom';
import {classNames} from 'shared/lib/classNames/classNames';
import {useTheme} from 'app/providers/ThemeProvider';
import {AboutPage} from 'pages/AboutPage';
import {MainPage} from 'pages/MainPage';
import {AppRouter} from 'app/providers/router';

const App = () => {
    const {theme, toggleTheme } = useTheme()

    return (
        <div className={classNames('app',{},[theme])}>
            <button onClick={toggleTheme}>TOGGLE THEME</button>
            <Link to={'/'}>Главная</Link>
            <Link to={'/about'}>О сайт</Link>

            <AppRouter />
        </div>
    );
};

export default App;
