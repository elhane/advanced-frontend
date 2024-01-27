import {classNames} from 'shared/lib/classNames/classNames';
import styles from './Sidebar.module.scss'
import {useState} from 'react';
import {ThemeSwitcher} from 'widgets/ThemeSwitcher';


interface SidebarProps {
    className?: string
}

export const Sidebar = ({className}: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false)

    const onToggle = () => {
        setCollapsed(prevState => !prevState)
    }

    return (
        <div className={classNames(styles.Sidebar, {[styles.collapsed]: collapsed}, [className])}>

            <button onClick={onToggle}>toggle sidebar</button>
            <div className={styles.switchers}>
                <ThemeSwitcher className={''} />
                {/*    LangSwitcher */}
            </div>
        </div>
    );
};

