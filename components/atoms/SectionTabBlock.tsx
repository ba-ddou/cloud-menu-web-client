import styles from './SectionTabBlock.module.sass'

export interface SectionTabBlockProps {
    title: string
    active: boolean
    onClick: () => void
}

export const SectionTabBlock: React.SFC<SectionTabBlockProps> = ({
    title,
    active,
    onClick
}) => {
    return (
        <span
            className={
                `${styles.sectionTabBlock} ${active ? styles.active : ''}`
            }
            onClick={onClick}
        >{title}</span>
    );
}

export default SectionTabBlock;