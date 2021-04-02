import { MenuItemThumbnail, MenuItemNameAndDescriptions, MenuItemPrice } from '@components/atoms'
import { MenuItem as MenuItemT } from 'cloud-menu-shared-libs'
import styles from './MenuItem.module.sass'
export interface MenuItemProps {
    menuItem: MenuItemT
}

export const MenuItem: React.SFC<MenuItemProps> = ({ menuItem }) => {
    return (
        <div className={styles.menuItem}>
            <MenuItemThumbnail uri={menuItem.thumbnail.uri} />
            <MenuItemNameAndDescriptions name={menuItem.name} description={menuItem.description} />
            <MenuItemPrice price={menuItem.price} />
        </div>
    );
}

export default MenuItem;