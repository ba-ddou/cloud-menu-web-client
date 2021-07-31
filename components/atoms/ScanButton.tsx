import styles from './scanButton.module.sass'
// import qrSvg from '../../assets/icons/qrScanner.svg'
export interface ScanButtonProps {
    
}

export const ScanButton: React.FunctionComponent<ScanButtonProps> = () => {
    return (
        <div className={styles.scanButton}>
            {/* <img src={qrSvg} /> */}
        </div>
    );
}