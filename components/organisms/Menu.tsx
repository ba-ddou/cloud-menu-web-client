import { useState } from 'react';
import { SectionsTabBar, MenuItem } from '@components/molecules'
import { MenuSection } from 'cloud-menu-shared-libs'
export interface MenuProps {
    menu: MenuSection[]
}

export const Menu: React.SFC<MenuProps> = ({ menu }) => {
    const [selectedSectionId, setSelectedSectionId] = useState(menu[0].id);

    let onSectionChangeHandler = (id: string) => {
        setSelectedSectionId(id);
    }
    return (
        <div>
            <SectionsTabBar
                sections={menu.map(section => ({
                    id: section.id,
                    name: section.name
                }))}
                onSectionChange={onSectionChangeHandler}
                selectedSectionId={selectedSectionId}
            />
            {
                menu.map(({ items }) => {
                    return items.map(item => <MenuItem menuItem={item} />)
                })
            }
        </div>
    );
}

export default Menu;