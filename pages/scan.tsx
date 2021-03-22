import Head from 'next/head';
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import { Scanner } from '@components/molecules'


export interface ScanProps {

}

const Scan: React.FunctionComponent<ScanProps> = () => {
    const [scanState, setScanState] = useState<'scan' | 'success' | 'error'>('scan')
    const [showBusinessSkeleton, setShowBusinessSkeleton] = useState(false);
    const router = useRouter()

    let onScan = (data: string) => {
        // console.log('handle scan',data);
        setScanState('success');
        router.push(`/business/${data}`);

    };

    let onError = (error: string) => {
        setScanState('error');
    }




    useEffect(() => {
        const handleStart = (url) => (url.split('/')[0] == 'business') && setShowBusinessSkeleton(true);

        router.events.on('routeChangeStart', handleStart);

        return () => {
            router.events.off('routeChangeStart', handleStart)
        }
    })

    return (
        <div>
            <Head>
                <title>QR Scan ~ Cloud Menu</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <h1>Scan</h1>
            <div >
                {scanState == 'scan' && <Scanner onScan={onScan} onError={onError} />}
                {scanState == 'success' && <h3>successfully scanned</h3>}
                {scanState == 'error' && <h3>scan failed scanned</h3>}
                {showBusinessSkeleton && <h3>Business data is loading...</h3>}
            </div>
        </div>
    );
}

export default Scan;