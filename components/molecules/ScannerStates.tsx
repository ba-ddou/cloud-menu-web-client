import { ScannerSVG } from '../atoms'
import styles from './scannerStates.module.sass'

export interface ScannerStateProps {
    color: string
    text: string
    className: string
}

export const ScannerDefault: React.FunctionComponent<ScannerStateProps> = ({
    color,
    text = 'Broken or invalid QR code',
    className = ''
}) => {
    return (
        <div className={className}>
            <ScannerSVG color={color} />
            <p>{text}</p>
        </div>
    );
}


export const ScannerSuccess: React.FunctionComponent = () => <ScannerDefault className={styles.scannerSuccess} color='' text='QR Code succesfully scanned' />

export const ScannerError: React.FunctionComponent = () => <ScannerDefault className={styles.scannerError} color='' text='Broken or invalid QR code' />
