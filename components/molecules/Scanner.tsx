import dynamic from 'next/dynamic'

const QrScanner = dynamic(() => import('react-qr-reader'), { ssr: false })

export interface ScannerProps {
    onScan: (data: string) => void
    onError: (error: string) => void
}

export const Scanner: React.FunctionComponent<ScannerProps> = ({
    onScan,
    onError
}) => {



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

    let handleScan = (data) => {
        if (data) {
            stopScanner();
            onScan(data);
        }

    }

    return (
        <QrScanner
            delay={100}
            style={{
                height: 240,
                width: 320,
            }}
            onError={onError}
            onScan={handleScan}
        />
    );
}
