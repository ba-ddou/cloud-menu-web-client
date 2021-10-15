import Head from 'next/head';
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import { isBusinessPath } from '@helpers/validateURL'
import { Logo } from '@components/atoms'
import { Scanner } from '@components/organisms'


export interface ScanProps {

}

const Scan: React.FunctionComponent<ScanProps> = () => {
    const [showBusinessSkeleton, setShowBusinessSkeleton] = useState(false);
    const router = useRouter()

    let onScan = ({ businessId,metaString }) => router.push(`/business/${businessId}?meta=${metaString}`);

    let onCancelScan = () => router.push(`/`)



    useEffect(() => {
        const handleStart = (url) => isBusinessPath(url) && setShowBusinessSkeleton(true);
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
            <Logo />

            <div >
                <Scanner onScan={onScan} onCancelScan={onCancelScan} />
            </div>
        </div>
    );
}

export default Scan;