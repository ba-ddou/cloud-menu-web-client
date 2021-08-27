import { useState } from 'react';
import dynamic from 'next/dynamic'
import { InstructionsBox, FinePrintCTA } from '@components/atoms'
import { ScannerDefault, ScannerSuccess, ScannerError } from '../molecules'
import { parseQrCode } from '@helpers/qrCode'
import styles from './Scanner.module.sass'

const QrScanner = dynamic(() => import('react-qr-reader'), { ssr: false })

export interface ScannerProps {
    onScan: ({ businessId }: { businessId: string }) => void
    onCancelScan: () => void
}

export const Scanner: React.FunctionComponent<ScannerProps> = ({
    onScan,
    onCancelScan
}) => {
    const [scanState, setScanState] = useState<'scan' | 'success' | 'error'>('scan')

    let onErrorHandler = () => {
        setScanState('error');
    }
    let onScanHandler = (data) => {
        if (!data) return;
        let { businessId } = parseQrCode(data);
        if (businessId) {
            stopScanner();
            setScanState('success');
            onScan({ businessId });
        } else{
            stopScanner();
            setScanState('error');
        } 
    }

    let onTryAgainHandler = () => {
        setScanState('scan');
    }

    let stopScanner = async () => {
        try {
            document.querySelector('video').srcObject = null
            await navigator.mediaDevices
                .getUserMedia({
                    video: true,
                })
                .then(mediaStream => {
                    mediaStream.getVideoTracks().forEach(track => {
                        mediaStream.removeTrack(track);
                        track.stop();
                    });
                });
            return;


        } catch (error) {
            console.error('stop scanner failed because', error);
        }

    }



    return (
        <div>
            {scanState == 'scan' &&
                <>
                    <InstructionsBox text="Align the QR code within the frame to scan" />
                    <div id={styles.scanner}>
                        <QrScanner
                        delay={100}
                        style={{
                            height: 240,
                            width: 320,
                        }}
                        onError={onErrorHandler}
                        onScan={onScanHandler}
                    />
                    </div>
                    <FinePrintCTA text="Cancel Scanning" onClick={onCancelScan} />
                </>
            }
            {scanState == 'success' && <ScannerSuccess />}
            {scanState == 'error' &&
                <>
                    <ScannerError />
                    <FinePrintCTA text="Try Again" onClick={onTryAgainHandler} />
                </>
            }
        </div>

    );
}
