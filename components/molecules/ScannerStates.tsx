import { ScannerSVG } from '../atoms'

export interface ScannerStateProps {
    color: string
    text: string
}

export const ScannerDefault: React.FunctionComponent<ScannerStateProps> = ({
    color,
    text = 'Broken or invalid QR code'
}) => {
    return (
        <div>
            <ScannerSVG color={color} />
            <p>{text}</p>
        </div>
    );
}


export const ScannerSuccess: React.FunctionComponent = () => <ScannerDefault color='' text='QR Code succesfully scanned' />

export const ScannerError: React.FunctionComponent = () => <ScannerDefault color='' text='Broken or invalid QR code' />
