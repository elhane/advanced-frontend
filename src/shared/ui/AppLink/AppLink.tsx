import {FC} from 'react';
import {Link, LinkProps} from 'react-router-dom';
import {classNames} from 'shared/lib/classNames/classNames';
import styles from './AppLink.module.scss'

export enum AppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary'
}

interface AppLinkProps extends LinkProps {
    className?: string
    theme?: AppLinkTheme
}

export const AppLink: FC<AppLinkProps> = (props) => {
    const {
        children,
        className,
        to,
        theme = AppLinkTheme.PRIMARY,
        ...otherProps
    } = props

    return (
        <Link
            className={classNames(styles.AppLink, {theme}, [className, styles[theme]])}
            to={to}
            {...otherProps}
        >
            {children}
        </Link>
    );
};
