import styles from './SectionsTabBar.module.sass'
import { SectionTabBlock } from '@components/atoms'

export interface SectionsTabBarProps {
    sections: {
        id: string
        name: string
    }[]
    selectedSectionId: string
    onSectionChange: (id: string) => void
}

export const SectionsTabBar: React.SFC<SectionsTabBarProps> = ({
    sections,
    selectedSectionId,
    onSectionChange
}) => {

    return (

        <div className={styles.sectionsTabBar}>
            {
                sections.map(
                    section => <SectionTabBlock
                        title={section.name}
                        active={selectedSectionId == section.id ? true : false}
                        onClick={() => onSectionChange(section.id)}
                    />
                )
            }
        </div>
    );
}

export default SectionsTabBar;