import Head from 'next/head';
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import { useRef, useState, useEffect } from 'react'

const QrScanner = dynamic(() => import('react-qr-reader'), { ssr: false })
export interface ScannerProps {

}

const Scanner: React.FunctionComponent<ScannerProps> = () => {
    const [state, setstate] = useState<'scan' | 'success' | 'error'>('scan')
    const router = useRouter()

    let handleScan = async (data: string | null) => {
        // console.log('handle scan',data);
        if (data) {
            await stopScanner()
            setstate('success');
            router.push(`/business/${data}`);
        }

    };
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

    useEffect(() => {
        return () => {
            stopScanner();
        }
    }, [])
    return (
        <div>
            <Head>
                <title>QR Scanner ~ Cloud Menu</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <h1>scanner</h1>
            <div >
                {state == 'scan' && <QrScanner
                    delay={100}
                    style={{
                        height: 240,
                        width: 320,
                    }}
                    onError={console.log}
                    onScan={handleScan}
                    facingMode='environment'
                />}
                {state == 'success' && <h3>successfully scanned</h3>}
                {state == 'error' && <h3>scan failed scanned</h3>}
            </div>
        </div>
    );
}

export default Scanner;