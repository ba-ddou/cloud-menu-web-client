import styles from './MenuItemAtoms.module.sass'

export interface MenuItemThumbnailProps {
    uri: string
}

export const MenuItemThumbnail: React.SFC<MenuItemThumbnailProps> = ({ uri }) => {
    return (
        <img className={styles.menuItemThumbnail} src={uri} />
    );
}



export interface MenuItemNameAndDescriptionsProps {
    name: string
    description: string
}

export const MenuItemNameAndDescriptions: React.SFC<MenuItemNameAndDescriptionsProps> = ({ name, description }) => {
    return (
        <div className={styles.menuItemNameAndDescriptions}>
            <span>{name}</span>
            <span>{description}</span>
        </div>
    );
}


export interface MenuItemPriceProps {
    price: number
}

export const MenuItemPrice: React.SFC<MenuItemPriceProps> = ({ price }) => {
    return (
        <div className={styles.menuItemPrice}>
            <span>{`${price} $`}</span>
        </div>
    );
}