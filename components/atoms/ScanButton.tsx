import styles from './scanButton.module.sass'
// import qrSvg from '../../assets/icons/qrScanner.svg'
import ScannerSVG from './ScannerSVG'
import hbn from '../../'
export interface ScanButtonProps {
    
}

export const ScanButton: React.FunctionComponent<ScanButtonProps> = () => {
    return (
        <div className={styles.scanButton}>
            {/* <img src={qrSvg} /> */}
            <ScannerSVG color="#000" />
        </div>
    );
}