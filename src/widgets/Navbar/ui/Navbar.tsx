import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import styles from './Navbar.module.scss';

interface NavbarProps {
    className?: string
}

export const Navbar = ({ className }: NavbarProps) => (
  <div className={classNames(styles.Navbar, {}, [className])}>
    <div className={styles.links}>
      <AppLink to="/" className={styles.main_link} theme={AppLinkTheme.SECONDARY}>
        Главная
      </AppLink>
      <AppLink to="/about" theme={AppLinkTheme.SECONDARY}>
        О сайте
      </AppLink>
    </div>
  </div>
);
