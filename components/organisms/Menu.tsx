import { useState } from 'react';
import { SectionsTabBar, MenuItem } from '@components/molecules'
import { MenuSection } from '@cloudmenu/cloud-menu-shared-libs'
export interface MenuProps {
    menu: MenuSection[]
}

export const Menu: React.SFC<MenuProps> = ({ menu }) => {
    const [selectedSectionId, setSelectedSectionId] = useState(menu[0].id);

    let onSectionChangeHandler = (id: string) => {
        setSelectedSectionId(id);
        document.getElementById(id).scrollIntoView();
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
                menu.map(({ id, name, items }) => {
                    return (
                        <>
                            <h2 id={id}>{name}</h2>
                            {items.map(item => <MenuItem key={item._id} menuItem={item} />)}
                        </>
                    )
                })
            }
        </div>
    );
}

export default Menu;