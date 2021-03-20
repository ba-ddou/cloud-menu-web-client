import styles from './scanButton.module.sass'
export interface ScanButtonProps {
    
}

export const ScanButton: React.FunctionComponent<ScanButtonProps> = () => {
    return (
        <div className={styles.scanButton}>
            scan
        </div>
    );
}