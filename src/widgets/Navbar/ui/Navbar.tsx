import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Navbar.module.scss'
import { AppLink } from 'shared/ui/AppLink'
import { AppLinkTheme } from 'shared/ui/AppLink'
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher'
import { useTranslation } from 'react-i18next'

interface NavbarProps {
    className?: string,
}

export const Navbar = ({className}: NavbarProps) => {
    const {t} = useTranslation('translation');

    return (
        <div className={classNames(cls.Navbar, {}, [])}>
            <div className={cls.links}>
                <AppLink theme={AppLinkTheme.SECONDARY} to={'/'} className={cls.mainLink}>
                    {t('Main')}
                </AppLink>
                <AppLink theme={AppLinkTheme.SECONDARY} to={'/about'}>
                    {t('About us')}
                </AppLink>
            </div>
        </div>
    )
}