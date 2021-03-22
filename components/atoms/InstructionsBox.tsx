import styles from './instructionsBox.module.sass'

export interface InstructionsBoxProps {
    text: string
}

export const InstructionsBox: React.FunctionComponent<InstructionsBoxProps> = ({ text }) => {
    return (
        <div className={styles.instructionsBox}>
            {text}
        </div>
    );
}

export default InstructionsBox;